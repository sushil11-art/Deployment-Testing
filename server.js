const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send('Home page of app');
})

app.get("/demo",(req,res)=>{
    // let message="This is demo api for deployment";
    res.send('Hello World!');
})

const port = process.env.port || 4000;

app.listen(port,()=>{
    console.log("Node API is running on port 4000");
});

module.exports=app;
