const mongoose = require('mongoose');
const {Schema} = mongoose;

const RSSSchema = new Schema({
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'user'
    },
    title: {
       type:String
    },
    rssurl:{
        type: String
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('rsslinks', RSSSchema);