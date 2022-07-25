const mongoose=require('mongoose');
const { Schema } = mongoose;
const bcrypt=require('bcryptjs');
const jwt= require('jsonwebtoken');
const SECRET_KEY='payingguestrentalsystemprojectinmernstack';
const pgSchema=new Schema({
    email:{type:String,required:true},
    phone_no:{type:String,required:true},
    address:{type:String,required:true},
    pincode:{type:Number,required:true},
    accomodation_facilities:{type:String,required:true},
    lodging:{type:String,required:true},
    rent:{type:Number,required:true},
    person:{type:Number,required:true}
});
module.exports=mongoose.model('pg',pgSchema);
