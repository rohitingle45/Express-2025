import express from 'express';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cookieParser());

let encyptedVal = '';

app.get('/',(req,res)=>{

    // setting the cookie 
   // res.cookie('name','Rohit Ingle');

    // getting the cookie from the browser 
   // console.log(req.cookies);

    // encryption using bcrypt
    /*
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash('Rohit123',salt,function(err,hash){
           encyptedVal = hash; 
           console.log(encyptedVal);
        });
        // decryption using bcrypt
    bcrypt.compare('Rohit123',encyptedVal,function(err,result){
       console.log(result);
       
    });
    });
    */
   
   let token = jwt.sign({name:'Rohit Ingle'},'Secret-Key');
   console.log(token);

   res.cookie('token',token);
   console.log(req.cookies.token);
   let decryptToken = jwt.verify(req.cookies.token,'Secret-Key');
   console.log(decryptToken);
   
   
    res.send('<h1>Home Page</h1>');
})

app.get('/about',(req,res)=>{

    res.send('<h1>About Page</h1>');
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
