import express from 'express';
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
})

app.get('/update',(req,res)=>{
    res.render('update-member');
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
