// external middleware in express.js
// ex ---> morgan

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home',{name:'Rohit Ingle'});
})

app.listen(4000);