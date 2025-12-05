import mongoose from "mongoose";

async function dbConnection() {

    await mongoose.connect('mongodb://localhost:27017/department');

    const familySchema = new mongoose.Schema({
        name:String,
        age:Number,
        city:String,
    });
    
    const familyModel = mongoose.model('family',familySchema,'family');
    return familyModel;

}

export default dbConnection;