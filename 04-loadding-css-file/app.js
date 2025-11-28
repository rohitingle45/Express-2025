// loadding or rendering html file in express js
import express from 'express';
import path from 'path';

const app = express();
const publicPath = path.resolve('public');
console.log(publicPath);
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    const homeHtmlFile = path.resolve('./home.html');
    res.sendFile(homeHtmlFile);
})

app.get('/about',(req,res)=>{
    const aboutHtmlFile = path.resolve('./about.html');
    res.sendFile(aboutHtmlFile);
})
app.use((req,res)=>{
     const errorHtmlFile = path.resolve('./404.html');
    res.status(404).sendFile(errorHtmlFile);
})
app.listen(4000);