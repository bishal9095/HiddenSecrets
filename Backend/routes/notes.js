// const { request } = require('express')

const express=require('express')
const router=express.Router()
const fetchuser=require('../middleware/fetchuser')
const Notes=require('../models/Notes')
const{body,validationResult}=require('express-validator')
// Route 1: Creating a post through POST request URL:/api/notes/createnote.Login required
router.post('/createnote',fetchuser,[
    body('title','Enter a valid title min 3 characters').isLength({ min: 3 }),
    body('description','Descripton should be atleast of 5 char').isLength({ min: 5 })
    
],async(req,res)=>{
   try {
    const errors=validationResult(req)
    if (!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }
    const {title,description,tag}=req.body
    const note=new Notes({
        title,description,tag,user:req.user.id
    })
    const savedNote=await note.save()
    res.send(savedNote)
   } catch (error) {
    res.status(500).send("Internal server Error")
   }
    
})
//Route 2: Return the notes created by the user. GET request,URL:/api/notes/getnotes.Login required
router.get('/getnotes',fetchuser,async(req,res)=>{
try {
    const notes=await Notes.find({user:req.user.id})
    res.json(notes)
} catch (error) {
    res.status(500).send("Internal server Error")
}

})
//Route 3: Update a existing node. PUT request,URL:/api/notes/updatenote.Login required
router.put('/updatenote/:id',fetchuser,async(req,res)=>{
    const {title,description,tag}=req.body
    //Create a new note object
    try {
        
    
    const newNote={}
    if (title){newNote.title=title}
    if (description){newNote.description=description}
    if (tag){newNote.tag=tag}
    let note=await Notes.findById(req.params.id)
    if(!note){
        return res.status(404).send("Not Found")
    }
    if ((note.user.toString())!=req.user.id){
        return res.status(401).send("Unauthorized Access")
    }
    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.send({note})
} catch (error) {
        res.status(500).send("Internal server error")
}
})
//Route 4: Find and delete a existing node. DELETE request,URL:/api/notes/deletenote.Login required
router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    try {
    
    let note=await Notes.findById(req.params.id)
    if(!note){
        return res.status(404).send("Not Found")
    }
    if ((note.user.toString())!=req.user.id){
        return res.status(401).send("Unauthorized Access")
    }
    note=await Notes.findByIdAndDelete(req.params.id)
    res.send({"message":"Deletion Success",note})
} catch (error) {
        res.status(500).send("Internal server error")
}
})
//Route 5. Get a full note using GET request,URL:/api/notes/getaNote. Login required
router.get('/getaNote/:id',fetchuser,async(req,res)=>{
    try{
        let note = await Notes.findById(req.params.id)
        // console.log(note)
        if (!note){
            return res.status(404).send('Not Found')
        }
        if ((note.user.toString())!=req.user.id){
            return res.status(401).send('Unauthorized Access')
        }
        note=await Notes.findById(req.params.id)
        res.send({note})
    }
    catch(error){
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})


module.exports=router