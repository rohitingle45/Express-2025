// dynamic routing in express.js
import express from 'express';

const app = express();

app.get('/:name',(req,res)=>{
    const name = req.params.name;
    res.send(`<h1>Name is : ${name}</h1>`);
})

app.listen(4000);