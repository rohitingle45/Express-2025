// middleware in express.js
import express from 'express';
const app = express();

// creating middleware
function ageCheck(req,res,next){
    if(!req.query.age || req.query.age<18) {
        res.send('<h1>Sorry!! cannot access.....</h1>');
    }
    else {
        next();      
    }
}

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login Page</h1>');
})

app.get('/users',ageCheck,(req,res)=>{
    res.send('<h1>Users Page</h1>');
})

app.get('/products',ageCheck,(req,res)=>{
    res.send('<h1>Products Page</h1>');
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
