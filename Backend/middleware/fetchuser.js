const jwt= require("jsonwebtoken")
const JWT_SECRET='Hidden_secrets_at_your_service'
const fetchuser=(req,res,next)=>{
    //GEt the user from jwt and add id to the req object
    const token=req.header('auth-token')
    if (!token){
        res.status(401).send('Please use valid token for validation')
    }
    try {
        const data=jwt.verify(token,JWT_SECRET)
        req.user=data.user
        next()
    } catch (error) {
        res.status(401).send('Please use valid token for validation')
    }
    // next()
}
module.exports=fetchuser