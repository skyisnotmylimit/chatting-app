const express = require("express");

const app = express();

app.get("/",(req,res) =>{
    res.status(200).send({"message" : "API is running on port 5000"});
});

app.listen(5000,()=>{
    console.log("server is running..");
});