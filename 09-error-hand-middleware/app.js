// external middleware in express.js
// ex ---> morgan

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>");
})

app.get('/users',(req,res)=>{
    res.send("<h1>Users Page</h1>");
})

app.get('/error',(req,res)=>{
    res.send1("<h1>Error Page</h1>");
})

// error handling 
app.use((error,req,res,next)=>{
    res.status(error.status || 500).send('<h1>Try Latar.....</h1>');
})
app.listen(4000);