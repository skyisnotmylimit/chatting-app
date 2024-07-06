require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;
const mongoURL = process.env.MONGOURI;

const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(mongoURL);
        console.log("Connected to mongoDB sucessfully...");
    } catch (error) {
        console.log("Some Error occured connecting to mongoDB",error);
    }
    const connect = await mongoose.connect(mongoURL);
    console.log
}
connectDB();

app.get("/",(req,res) =>{
    res.status(200).send({"message" : `Api is running on port ${port}`});
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});