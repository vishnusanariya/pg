const jwt=require('jsonwebtoken');
const user=require('../models/userSchema');
const SECRET_KEY='payingguestrentalsystemprojectinmernstack';
const authenticate = async (req,res,next)=>{
    try{
        const {jwttoken}=req.body;
        const token=jwttoken;
        console.log('token in authenticate:',token);
        if(!token){
            return res.status(401).json({error:'please login'});
        }
        const decoded=jwt.verify(token,SECRET_KEY);
        const u=await user.findOne({_id:decoded._id, 'tokens.token':token});
        if(!u){
            return res.status(401).json({error:'please login uuuuu'});
        }
        req.user=u;
        req.token=token;
        next();
    }catch(err){
        console.log(err);
    }



   
}
module.exports = authenticate;