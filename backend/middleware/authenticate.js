const jwt=require('jsonwebtoken');
const user=require('../models/userSchema');
const authenticate = async (req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
        const userData=await user.findOne({_id:verifyToken._id,"tokens:token":token});
        if(!userData){throw new Error('user not found');}
        req.token=token;
        req.user=userData;
        req.userID=userData._id;
        next();
    }
    catch(err){
        console.log(err);
    }
}
module.exports = authenticate;