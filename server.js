const express = require("express");
const port = process.env.port || 8000;
const app = express();

app.get("/",(req,res)=>{
    res.send('Home page of app');
})

app.get("/demo",(req,res)=>{
    // let message="This is demo api for deployment";
    res.send('Hello World!');
})


app.listen(port,()=>{
    console.log(`Node API is running on port ${port}`);
});

module.exports=app;
