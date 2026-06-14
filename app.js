const express = require("express");
const app = express();

app.use((req,res)=>{
    console.log("hii i am middleware");
    res.send("middleware finished");
});

app.get("/",(req,res)=>{
    res.send("hii i am root");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.listen(8080,()=>{
    console.log("Listen to port 8080");
});