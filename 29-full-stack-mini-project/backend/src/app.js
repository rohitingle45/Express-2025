import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send({message:'basic backend api',success:true});
})

app.listen(4000);