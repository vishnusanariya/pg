const express = require('express')
const router = express.Router()
const db = require('../db');
const user = require('../models/userSchema');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const userSchema = require('../models/userSchema');
const pgSchema = require('../models/pgSchema');
router.get('/', (req, res) => {
    res.send('Hello from server');
})

//------------------------------using promiseses---------------------------------


// router.post('/register', (req, res) => {
//     const { name, email, phone_no, address, pincode, accomodation_facilities, lodging, rent, person, password, cpassword } = req.body;
//     if (!name || !email || !phone_no || !address || !pincode || !accomodation_facilities || !lodging || !rent || !person || !password || !cpassword) {
//         return res.status(422).json({ error: 'please fill up all the details all fields are mandatory' });
//     }
//     // res.send({message:req.body})
//     user.findOne({ email: email })
//         .then((userAlreadyExist) => {
//             if (userAlreadyExist)
//                 return res.status(422).json({ error: 'email already registered please sign in' });

//             const u = user({ name, email, phone_no, address, pincode, accomodation_facilities, lodging, rent, person, password, cpassword });
//             u.save().then(() => {
//                 res.status(201).json({ msg: 'user registered successfully' });
//             }).catch((err) => { res.status(500).json({ err: 'user registration failed' }) })
//         }).catch(err=>{consolr.log(err);});
// });

//-----------------------using async await--------------------------
router.post('/register',async (req,res)=>{
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: 'please fill up all the details all fields are mandatory' });
    }

    try{
        const userAlreadyExist=await user.findOne({ email: email })
        if(userAlreadyExist){
            return res.status(666).json({ error: 'email already registered please sign in' });
        }else if(password != cpassword){
            return res.status(422).json({ error: 'password and confirm password should be same' });
        }
        else{
            const u = new user({ name, email,password, cpassword });
            await u.save();
            res.status(201).json({ msg: 'user registered successfully' });
        }
    }catch(err){
        console.log(err);
    }
});

//=============login route====================
router.post('/signin',async (req,res)=>{
    try{
        const {email,password}=req.body
        if(!email ||!password)
        {return res.status(422).json({err:'please provide all the details'});}
        
        const userlogin= await user.findOne({email:email});
        if(userlogin){
            // console.log(userlogin);
           
            const isValid=bcrypt.compare(password,userlogin.password);
            const token=await userlogin.generateAuthToken();
            console.log(token);
            res.cookie('jwt',token,{
                expires:new Date(Date.now()+300000000),
                httpOnly:true,
            });
            if(!isValid){
                res.status(400).json({error:'invalid credentials'})
            }
            else{
                res.json({msg:'user login success'});
            }
        }
        else{
            res.status(400).json({error:'invalid credentials'});
            console.log('success login')
        }
    }catch(err){
        console.log(err);
    }
});
//register pg route
router.post('/registerPG',async (req,res)=>{
    const pg=req.body;
    const {email,phone_no,address,pincode,accomodation_facilities,lodging,rent,person}=pg;
    console.log(email,phone_no,address,pincode,accomodation_facilities,lodging,rent,person);
    if(!email ||!phone_no ||!address ||!pincode ||!accomodation_facilities ||!lodging ||!rent ||!person)
    {res.status(422).json({err:'please fill up '});}
    try{
        const userAlreadyExist=await user.findOne({email:email});
        if(userAlreadyExist){
            const pgAlreadyExist=await pgSchema.findOne({email:email});
        if(pgAlreadyExist){
           res.status(666).send({err:'email already registered'});
        }
        else{
            const pg=new pgSchema({email,phone_no,address,pincode,accomodation_facilities,lodging,rent,person});
            await pg.save();
            res.status(201).send({msg:'pg registered successfully'});
        }
        }
        else{
            res.status(422).send({err:'email not registered please sign in'});
        }
    }catch(err){
        console.log(err);
    }
}
);
//view PGs module
router.post('/viewPGs',async (req,res)=>{
    const b= await pgSchema.find();
    res.send(b);
}
);
module.exports = router;