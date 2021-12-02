const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const getuser = require('../customMiddleWares/getuser');
const jwt = require('jsonwebtoken');

const jwtSignature = "amandalal";

//end point to login user
router.post('/login', async (req, res)=>{
   const user = await User.findOne({email:req.body.email}).exec();
   let error = false;

   if(user){
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if(validPassword){
         error = true;
      }
   }

   let success = false;
   if(!error){
      res.json({success:success});
   }
   else{ 
      success = true;
      const data = {
         id:user.id
       }
      const authToken = jwt.sign(data, jwtSignature);
      res.json({success:success, authToken:authToken});
   }
})

//end point to get user based on login information
router.post('/getuser', getuser, async (req, res)=>{
   console.log(req.user);
   const user = await User.findById(req.user.id).exec();
   res.json(user);
});

module.exports = router;