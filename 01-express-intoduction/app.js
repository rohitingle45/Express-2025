// express js intro....
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
})

app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1>');
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
