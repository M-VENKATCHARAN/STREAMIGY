const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const Citizen = require('../models/citizen');
const Worker = require('../models/worker');
const router = express.Router();

    

router.post('/login', async (req,res)=>{
    const {userType, email, password} = req.body;
    let user;
    let valid_password; 
    switch(userType){
        case 'admin' :  user =  await Admin.findOne({email});
        try {
            if(!user){
                return res.status(400).json({message : 'invalid email or password'});
            }
            valid_password = await bcrypt.compare(password, user.password);
            if(!valid_password){
                return res.status(400).json({ message : 'invalid email or password'});
            }
            const token = jwt.sign({ email : user.email, id : user._id }, "secret");
            res.status(200).json({ name : user.name, token, userID: user._id, userType });
        } catch (error) {
            console.log("error from auth.js ",error);
        }
            break;
        case 'citizen' :  user =  await Citizen.findOne({email});
        try {
            if(!user){
                return res.status(400).json({message : 'invalid email or password'});
            }
            valid_password = await bcrypt.compare(password, user.password);
            if(!valid_password){
                return res.status(400).json({ message : 'invalid email or password'});
            }
            const token = jwt.sign({ email : user.email, id : user._id }, "secret");
            res.status(200).json({ name : user.name, token, userID: user._id, userType });
        } catch (error) {
            console.log("error from auth.js ",error);
        }
            break;
        case 'worker' :  user =  await Worker.findOne({email});
        try {
            if(!user){
                return res.status(400).json({message : 'invalid email or password'});
            }
            valid_password = await bcrypt.compare(password, user.password);
            if(!valid_password){
                return res.status(400).json({ message : 'invalid email or password'});
            }
            const token = jwt.sign({ email : user.email, id : user._id }, "secret");
            res.status(200).json({ name : user.name, token, userID: user._id, userType });
        } catch (error) {
            conconsole.log("error from auth.js ",error);
        }
            break;
    }
    
});

router.post('/register', async (req, res)=>{
    const {
        fullName,
        age,
        phoneNo,
        email,
        address,
        addharNo,
        password,
    } = req.body;
    const user = await Citizen.findOne({email});
    if(user){
        return res.status(409).json({message : 'account already exists by this account'});
    }
    const hashedPass = await bcrypt.hash(password, 7);
    const newUser = new Citizen({
        fullName,
        age,
        phoneNo,
        email,
        address,
        addharNo,
        password : hashedPass,
    });
    await newUser.save();
    res.status(200).json({msg : 'registration succesfull'});
})

module.exports = router;
