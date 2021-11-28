const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Enter your name']
    },
    email:{
        type:String,
        required:[true, 'Enter your email']
    },
    mobile_number:{
        type:Number,
        required:[true, 'Enter your number'],
        min:[10, 'Enter valid number']
    },
    password:{
        type:String,
        required:[true, 'Enter password']
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('user', UserSchema);