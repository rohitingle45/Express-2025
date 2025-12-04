import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

const dbName = 'department';
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

app.get('/', async(req,res)=>{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('family');
    const dbResult = await collection.find().toArray();
    console.log(dbResult);
    res.render('display',{dbResult});
})

app.listen(4000);