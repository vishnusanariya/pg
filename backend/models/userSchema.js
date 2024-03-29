// import mongoose from 'mongoose';
const mongoose=require('mongoose');
const { Schema } = mongoose;
const bcrypt=require('bcryptjs');
const jwt= require('jsonwebtoken');
const SECRET_KEY='payingguestrentalsystemprojectinmernstack';
const userSchema = new Schema({
  name:{type:String,required:true,},
  email:{type:String,required:true},
  password:{type:String,required:true},
  cpassword:{type:String,required:true},
  tokens:[
    {
      token:{
        type:String,required:true
      },
    }
  ]
});


userSchema.pre('save',async function(next){
  if(this.isModified('password'))
  {
    this.password=await bcrypt.hash(this.password,12);
    this.cpassword=await bcrypt.hash(this.cpassword,12);
  }
  next();
});

userSchema.methods.generateAuthToken= async function(){
  try{
    let Sessiontoken=jwt.sign({_id:this._id},SECRET_KEY);
    this.tokens=this.tokens.concat({token:Sessiontoken});
    await this.save();
    return Sessiontoken;
  }catch(err){
      console.log(err);
  }
}
module.exports=mongoose.model('user',userSchema);