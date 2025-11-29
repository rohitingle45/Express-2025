// creating dynamic routing with api

import express from 'express';
import userData from './users.json' with {type:'json'};

const app = express();

// creating simple API
app.get('/',(req,res)=>{
    console.log(userData);
    res.send(userData);
    
})

// creating API on the basis of user-id
app.get('/:id',(req,res)=>{
    const id = req.params.id;  // getting id from url
    const filterData = userData.filter((user)=>(user.id == id));
    res.send(filterData);
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
