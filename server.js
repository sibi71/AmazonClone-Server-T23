const express = require("express");

require("dotenv").config();

const connectDB = require("./config/db")

const apiRouter = require("./routes")

const app = express();

const cors= require("cors");

app.use(cors());

app.use(express.json());

app.use("/api",apiRouter);

const port = process.env.PORT||4000;

connectDB();

app.get("/",(req,res)=>{
    res.json("Api is working")
})

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}` );
})