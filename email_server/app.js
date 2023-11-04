require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/routes")
const cors = require("cors");
const port = 8006;

app.use(express.json());
app.use(router);
app.use(cors());
app.get("/",(req,res)=>{
    res.send("server start");
})

app.listen(port,()=>{
    console.log(`server start at port no : ${port}`)
})