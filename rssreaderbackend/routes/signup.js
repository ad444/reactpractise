const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');

const jwtSignature = "amandalal";

router.post('/', async (req, res)=>{
    const user = new User(req.body);
    //checking if the user with this email exists
    check = false;
    const sameUserEmail = await User.findOne({email:req.body.email}).exec();
    if(sameUserEmail === null){
      check = false;
    }else{
      check = true;
      console.log('User with this email already exists');
    }
    //checking if the user with this number exists
    const sameUserNumber = await User.findOne({mobile_number:req.body.mobile_number}).exec();
    if(sameUserNumber === null){
       check = false;
    }else{
       check = true;
       console.log('User with this number already exists');
    }
    //check whether to submit user data or not
    if(check){
      res.send("Enter valid data")
    }else{
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB.
            user.password = hash;
            user.save().then(()=>{
              console.log('Sign up successfully completed!');
              const data = {
                id:user.id
              }
              const authToken = jwt.sign(data, jwtSignature);
              res.send(authToken);
            })
        });
      });
      
    }
});

module.exports = router;