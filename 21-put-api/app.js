import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const dbName = 'department';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
})

app.put('/update/:id',async(req,res)=>{

    const urlId = req.params.id;
    const urlData = req.body;

    const filter = {_id:new ObjectId(urlId)};
    const update = { $set: urlData };

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('family');
    const dbResult = await collection.updateOne(filter,update);

    if(dbResult){
        res.send({messege:'data updated',result:urlData,success:'true'});
    }
    else{
        res.send({messege:'data not updated',success:'false'});
    }
    
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
