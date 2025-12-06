import express from 'express';
import multer from 'multer';

const app = express();
app.use(express.urlencoded({extended:false}));

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        return cb(null,'./uploads');
    },
    filename:function (req,file,cb){
        return cb(null,file.originalname);
    },
})

const upload = multer({storage});

app.get('/',(req,res)=>{
    res.send(` <form action="/upload" method="post" enctype="multipart/form-data">
         <input type="file" name="file1">
         <button type="submit">Upload</button>
       </form>`);
})

app.post('/upload',upload.single('file1'),(req,res)=>{
    res.send('<h1>file uploaded successfully.....</h1>');
})

app.listen(4000,()=>{
    console.log('http://localhost:4000/');
})
