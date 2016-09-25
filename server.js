'use strict';

var express = require('express');
var app = express();
var fs = require('fs');


app.get('/app.js',(req,rex) => {

    if(process.env.PRODUCTION){
        res.sendFile(__dirname + '/build/app.js');
    }else{
        res.redirect('//localhost:9090/build/app.js');
    }
});

app.get('/style.css',(req,res) => {
    if(process.env.PRODUCTION){
        res.sendFile(___dirname + '/build/style.css');
    }else{
        res.redirect('//localhost:9090/build/style.css');
    }
});
