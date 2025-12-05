import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const dbName = 'department';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
})

app.delete('/delete-method/:id',async(req,res)=>{
    const urlId = req.params.id;
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('family');
    const dbResult = await collection.deleteOne({_id: new ObjectId(urlId)})
    if(dbResult){
        res.send({messege:'data deleted.....',success:true});
    }
    else{
         res.send({messege:'data not deleted.....',success:false});
    }
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
