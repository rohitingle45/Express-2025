import express from 'express';
import mongoose from 'mongoose';
import dbConnection from './db.js';

const app = express();
const familyModel = await dbConnection();

app.get('/',async(req,res)=>{
   const dbResult = await familyModel.find();
   res.send(dbResult);
})

app.listen(4000);