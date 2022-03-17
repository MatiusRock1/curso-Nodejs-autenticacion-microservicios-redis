const express = require('express');

const config= require('../config.js');
const app = express();
const user = require('./components/user/network');
//router

app.use('/api/user',user);

app.listen(config.api.port, () => {
    console.log('api escuchando en puero 3000');
})