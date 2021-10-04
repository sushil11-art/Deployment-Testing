const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send('Home page of app');
})

app.get("/demo",(req,res)=>{
    // let message="This is demo api for deployment";
    res.send('Hello World!');
})

app.listen(4000,()=>{
    console.log("Node API is running on port 4000");
});

module.exports=app;
