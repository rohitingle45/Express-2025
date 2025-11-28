// middleware in express.js
import express from 'express';
const app = express();

// creating middleware
app.use((req,res,next)=>{
    if(!req.query.age || req.query.age<18) {
        res.send('<h1>Sorry!! cannot access.....</h1>');
    }
    else {
        next();      
    }
})

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
})

app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1>');
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
