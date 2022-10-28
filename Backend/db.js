const mongoose=require('mongoose');
const mongoURI='mongodb://localhost:27017/Auth_Users'
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('Connected to mnogo')
    })
}
module.exports=connectToMongo;