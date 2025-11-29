// mvc architecture in express js
import express from "express";
import { handleUsers } from "./Controller/userController.js";
const app = express();

app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/users',handleUsers) // define controller that handles routing here......

app.listen(4000);