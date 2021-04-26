const express = require('express');
const path =require('path');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const port = 80;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next)=>{
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const serverHttps = https.createServer({}, app);


serverHttps.listen(port, ()=>{
    console.log(`Listening at port: ${port}`)
});


