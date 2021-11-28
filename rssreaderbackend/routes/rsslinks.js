const express = require('express');
const RSSLinks = require('../models/RSSLinks');
const getuser = require('../customMiddleWares/getuser');
const router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();

//end-point to add a rss link
router.post('/addrsslink', getuser, async(req, res) => {
    const checking = await RSSLinks.find({ user: req.user.id, rssurl:req.body.url }).exec();

    //if link is not already present
    if (checking.length === 0) {
        console.log('new link');
        const rsslink = new RSSLinks({ user: req.user.id, rssurl: req.body.url });

        rsslink.save().then(() => {
            let data;
            (async () => {
                data = await parser.parseURL(req.body.url);
                res.json(data);
            })();
        }).catch((err) => {
            res.json({err:err});
        })
    } else {
        res.json({ error: 'this rss link already exist' });
    }
})

module.exports = router;