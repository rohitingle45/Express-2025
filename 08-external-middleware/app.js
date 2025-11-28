// external middleware in express.js
// ex ---> morgan

import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>");
})

app.get('/users',(req,res)=>{
    res.send("<h1>Users Page</h1>");
})