// express js intro....
// const express = require('express');
import express from 'express';
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('addUser');
})

app.post('/show-user',(req,res)=>{
    res.render('ShowUser',req.body);
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
