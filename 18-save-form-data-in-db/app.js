import express from "express";
import {MongoClient} from "mongodb";

const dbName = 'department';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.send('<h1>This is Home Page</h1>');
})

app.get('/add',(req,res)=>{
    res.render('addMember');
})

app.post('/add-member',async(req,res)=>{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('family');
    const formData = req.body;
    const dbResult = await collection.insertOne(formData);
    console.log(formData);
    console.log(dbResult);
    res.send('<h1>Data Added Successfully......</h1>');
})

app.listen(4000);