const express = require('express');

const router = express.Router();
const Contact = require('../models/Contact');


router.post('/', (req, res)=>{
   const contactDetails = new Contact(req.body);


   contactDetails.save().then(()=>{
       res.json({success:true});
   }).catch((err)=>{
       res.json({success:false, err:err});
   })
})

module.exports = router;