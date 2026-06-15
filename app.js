const express = require("express");
const app = express();

// app.use((req, res, next)=>{
//     console.log("hii i am 1st middleware");
//     // res.send("middleware finished");
//     next();
// });

// app.use((req, res, next)=>{
//     console.log("hii i am 2nd middleware");
//     next();
// });.



// logger -> use to log information
// app.use((req, res, next)=>{
//     console.log(req.method);
//     console.log(req.hostname);
//     console.log(req.path);
//     req.setTime = new Date(Date.now()).toString();
//     console.log(req.time);
//     next();
// });


// app.use("/random",(req,res,next)=>{
//     console.log("i am only for random");
//     next();
// });

// for giving access
// app.use("/api",(req, res, next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }else{
//         res.send("ACCESS DENIED");
//     }
// })

// app.get("/api",(req,res)=>{
//     res.send("data");
// })


// from this we can check multiple middleware and give access
const checkToken = (req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
        res.send("ACCESS DENIED");
    }
}

app.get("/api", checkToken,(req,res)=>{
    res.send("data");
})

app.get("/",(req,res)=>{
    res.send("hii i am root");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

// 404 error
app.use((req,res)=>{
    res.send("page not found");
})

app.listen(8080,()=>{
    console.log("Listen to port 8080");
});