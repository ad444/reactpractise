const express = require('express');
let Parser = require('rss-parser');
let parser = new Parser();
const router = express.Router();


router.post('/', (req, res)=>{
    console.log(req.body);
    let data;
    (async () => {
        try{
            data = await parser.parseURL(req.body.url);
            res.json(data);
        }catch(err){
            res.json({err:err});
        }
        
    })();
})
module.exports = router;