const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();


app.get('/', (req, res) => {
    res.send('aqui esta');
});

mongoose.connect(
    process.env.DB_
    
);


app.listen(3000);