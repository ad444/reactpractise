const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Enter your name']
    },
    email:{
        type:String,
        required:[true, 'Enter your email']
    },
    mobile_number:{
        type:String,
        required:[true, 'Enter your number']
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('contact', ContactSchema);