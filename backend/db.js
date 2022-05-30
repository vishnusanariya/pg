const mongoose =require('mongoose');
const MongoUri="mongodb://localhost:27017/";
const ConnectToMongo=()=>{
    mongoose.connect(MongoUri).then(()=>{
        console.log("connected to database mongo successfully");
    }).catch((err)=>console.log('connection failed'));
}
module.exports=ConnectToMongo;