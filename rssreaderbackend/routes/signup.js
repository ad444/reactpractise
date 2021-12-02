const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');

const jwtSignature = "amandalal";

router.post('/', async (req, res)=>{
    const user = new User(req.body);
    //checker for the user
    check = true;

    const sameUserEmail = await User.findOne({email:req.body.email}).exec();
    if(sameUserEmail !== null){
      check = false;
    }
    //checking if the user with this number exists
    // const sameUserNumber = await User.findOne({mobile_number:req.body.mobile_number}).exec();
    // if(sameUserNumber === null){
    //   check = true;
    // }

    //check whether to submit user data or not
    if(!check){
      res.json({success:check})
    }else{
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB.
            user.password = hash;
            user.save().then(()=>{
              const data = {
                id:user.id
              }
              const authToken = jwt.sign(data, jwtSignature);
              res.json({success:check, authToken:authToken});
            })
        });
      });
      
    }
});

module.exports = router;