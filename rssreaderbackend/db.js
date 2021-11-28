const mongoose = require('mongoose');

const connectToDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/ClientDetails').then(()=>{
        console.log("Database connected successfully")
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectToDB;