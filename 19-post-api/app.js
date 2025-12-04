import express from "express";
import {MongoClient} from "mongodb";

const dbName = 'department';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
})

app.post('/post-method',async(req,res)=>{
    const result = req.body;
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('family');
    const dbResult = await collection.insertOne(result);
    console.log(dbResult);
    console.log(result);
    
    res.send({"message":"data store","success":true,"result":result});
})

app.listen(4000);