const express = require('express');

const router = express.Router();
const response = require('../../../network/response')

router.get('/', function (req, res){
    response.success(req,res,'todo correcto',200);
    res.send('funcionando');
});

module.exports = router;