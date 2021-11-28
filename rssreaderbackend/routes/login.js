const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const getuser = require('../customMiddleWares/getuser');
const jwt = require('jsonwebtoken');

const jwtSignature = "amandalal";

//end point to login user
router.post('/login', async (req, res)=>{
   console.log(req.body);
   const user = await User.findOne({email:req.body.email}).exec();
   const validPassword = await bcrypt.compare(req.body.password, user.password);

   if(!user){
      res.status(404).send("Please enter correct details");
   } else if(!validPassword){
      res.status(404).send("Please enter correct password");
   }
   else{ 
      const data = {
         id:user.id
       }
      const authToken = jwt.sign(data, jwtSignature);
      res.send(authToken);
   }
})

//end point to get user based on login information
router.post('/getuser', getuser, async (req, res)=>{
   console.log(req.user);
   const user = await User.findById(req.user.id).exec();
   res.json(user);
});

module.exports = router;