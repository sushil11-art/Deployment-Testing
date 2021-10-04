const express = require("express");
const app = express();

app.get("/demo",(req,res)=>{
    // let message="This is demo api for deployment";
    res.send('Hello There!');
})

app.listen(4000,()=>{
    console.log("Node API is running on port 4000");
});

module.exports=app;
