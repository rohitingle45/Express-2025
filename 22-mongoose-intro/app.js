import express from 'express';
import mongoose from 'mongoose';
const app = express();

async function dbConnection() {
    await mongoose.connect('mongodb://localhost:27017/department');

    const schema = new mongoose.Schema({
        name:String,
        age:Number,
        city:String,
    });
    const familyModel = mongoose.model('family', schema, 'family');
    const dbResult = await familyModel.find();
    console.log(dbResult); 
}

dbConnection();

app.listen(4000);