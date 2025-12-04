import express from "express";
import { MongoClient } from "mongodb";


const dbName = 'department';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const app = express();

app.get('/',(req,res)=>{
   res.send('<h1>Home Page</h1>');
})

app.get('/api',async(req,res)=>{
   await client.connect();
   const db = client.db(dbName);
   const collection = db.collection('family');

   const dbResult = await collection.find().toArray();
   res.send(dbResult);
   
})
app.listen(4000);