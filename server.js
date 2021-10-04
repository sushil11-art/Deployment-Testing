const express = require("express");
const app = express();

app.get("/demo",(req,res)=>{
    let message="This is demo api for deployment";
    res.json(message);
})

app.listen(4000);