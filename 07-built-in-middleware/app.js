import express from 'express';
import path from 'path';

const app = express();

app.use(express.urlencoded( {extended:false} ));
app.use(express.static('public'));


const htmlFile = path.resolve('./form.html');
console.log(htmlFile);

app.get('/',(req,res)=>{
    res.sendFile(htmlFile);
})

app.post('/submit',(req,res)=>{
    res.send("<h1>Submit Page</h1>");
    console.log(req.body);
    
})

app.listen(4000);