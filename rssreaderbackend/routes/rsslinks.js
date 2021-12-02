const express = require('express');
const RSSLinks = require('../models/RSSLinks');
const getuser = require('../customMiddleWares/getuser');
const router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();

//end-point for fetching rss links and title
router.get('/fetchrsslink', getuser, async(req,res)=>{
      //checking user id here
      const data = await RSSLinks.find({user:req.user.id}).exec();
      
      if(data){
          //for logged in user
          res.json({success:true, data:data});
      }else{
          //for signed up user
          res.json({success:false, data:{}})
      }
})


//end-point to add a rss link
router.post('/addrsslink', getuser, async(req, res) => {
    const checking = await RSSLinks.find({ user: req.user.id, rssurl:req.body.url }).exec();

    //if link is not already present
    if (checking.length === 0) {
        
        (async () => {
            let data;
            data = await parser.parseURL(req.body.url);
            
            const rsslink = new RSSLinks({ user: req.user.id, title:data.title, rssurl: req.body.url });
            rsslink.save().then(()=>{
                res.json(data);
            }).catch((err)=>{
                res.json({err:err});
            })
        })();
    } else {
        res.json({ error: 'this rss link already exist' });
    }
})


//end-point to delete rss link
router.put('/deletersslink/:id', getuser, async(req, res)=>{
  let rsslink = await RSSLinks.findById(req.params.id).exec();

  //check if the rsslink is present in the database
  if(!rsslink){
    return res.status(404).send("sorry rsslink you want to delete is not found")
  }
  //check if the owner of the rsslink is deleting the rsslink
  if(!JSON.stringify(rsslink.user).includes(req.user.id)){
    return res.status(401).send("You cannot delete this rsslink");
  }else{
    //delete the rsslink with new content
    rsslink = await RSSLinks.findByIdAndRemove(req.params.id);
    res.status(200).send(`successfully deleted ${rsslink}`);
  }
})
module.exports = router;