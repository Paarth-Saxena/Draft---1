const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT= 8000

app.use(express.static(path.join(__dirname,'..','public')))
app.use(express.json())

app.get("/",(req,res)=>{
     const frontEndFile = path.join(__dirname,"..","/index.html");
    return res.status(200).sendFile(frontEndFile);
})

app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`)
})