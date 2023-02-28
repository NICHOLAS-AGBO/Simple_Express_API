const express = require("express");
const app = express();
const cors = require("cors")


app.use(cors());
app.get("/",(req,res)=>{
    res.header({
        'X-Frame-Options': 'SAMEORIGIN'
    });
    res.status(200).send("<h1>Hello, Node js Api</h1>");
    console.log(req.headers);
})

app.listen(3000,()=>{
    console.log("App listening on port 3000");
})