import { MongoClient } from 'mongodb';

const dbName = "school";
const url = "mongodb+srv://rohitingle96424_db_user:Rohit123@cluster1.ysqahkj.mongodb.net/?appName=Cluster1";
const client = new MongoClient(url);

async function dbConnection(){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');
    const dbResult = await collection.find().toArray();
    console.log(dbResult);
}

dbConnection();


