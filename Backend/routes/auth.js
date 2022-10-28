const { body, validationResult } = require('express-validator');
const Users = require('../models/Users')
express=require('express')
const router=express.Router()
// For authentication and storing.
const bcrypt=require('bcryptjs')
var jwt = require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser')

const JWT_SECRET='Hidden_secrets_at_your_service'
// Create a user using :POST "/api/auth/createUser".Does not require auth.No login required just creates users.
router.post('/createUser',[
    // Validation bty expresss Validator
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password should be minimum 5 chararcters').isLength({ min: 5 }),

],async(req,res)=>{
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
        
    
    let user= await Users.findOne({email:req.body.email})
    
    if (user){
        return res.status(400).json({success,error:"Email already exists"})
    }
    const salt= await bcrypt.genSalt(10)
    const secPass= await bcrypt.hash(req.body.password,salt)
    user= await Users.create({
        name: req.body.name,
        password: secPass,
        email:req.body.email
      })
      const data={
        user:{
        id:user.id
        }
      }
      const authToken= jwt.sign(data, JWT_SECRET)
    // res.json(user)
    success=true
    res.json({success,authToken})
} catch (error) {
        console.error(error.message)
        res.status(500).send("Check for errors")
}
    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error:'Email already in use',message:err.message})})
})
//  Endpoint to authenticate the user to login route==>'/api/auth/login'
router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists()
],async(req,res)=>{
    const errors = validationResult(req);
    let success=false
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body
    try {
        let user=await Users.findOne({email})
        if (!user){
            return res.status(400).json({success,error:'Please login with correct credentials'})
        }
        const compare=await bcrypt.compare(password,user.password)
        if (!compare){
            return res.status(400).json({success,error:"Please login with correct credentials"})
        }
        const data={
            user:{
            id:user.id
            }
          }
          const authToken= jwt.sign(data, JWT_SECRET)
        // res.json(user)
        success=true
        res.json({success,authToken})
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
})
// Route 3:Get user details end point==>"/api/auth/getuser" .Login Required
router.post('/getuser',fetchuser,
async(req,res)=>{
try {
    const userId=req.user.id
    const user=await Users.findById(userId).select("-password")
    res.send(user)
} catch (error) {
    console.error(error.message)
        res.status(500).send("Internal Server Error")
}
})
module.exports=router