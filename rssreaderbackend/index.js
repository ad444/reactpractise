const express = require('express');
const cors = require('cors');

const connectToDB = require('./db');
connectToDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("my name is aman dalal");
})

//application routes
app.use('/api/signup', require('./routes/signup'));
app.use('/api/auth', require('./routes/login'));
// app.use('/api/rsslinks', require('./routes/rsslinks'));
// app.use('/api/contact', require('./routes/contact'));

app.listen(8080, ()=>{
    console.log(`Application is listening at : localhost:8080`);
})