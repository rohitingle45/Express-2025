import express from 'express';
import mongoose from 'mongoose';
import dbConnection from './db.js';

const app = express();
app.use(express.json());

const familyModel = await dbConnection();

app.get('/',async(req,res)=>{
   const dbResult = await familyModel.find();
   res.send(dbResult);
})

app.post('/add',async(req,res)=>{
  const dbResult = await familyModel.create(req.body);
  if(dbResult){
    res.send({messege:'data stored',success:true,dataInfo:dbResult});
  }
  else{
    res.send({messege:'data not stored',success:false});
  }
})

app.listen(4000);