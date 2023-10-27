const express = require("express");
const cors = require("cors");
const app = express();
const {v4: uuidv4} = require("uuid");
require("dotenv").config();
require("./config/connectionDb");
const cvRouter = require("./routers/cvRouter");

app.use(express.json());
app.use(cors());
app.use("/api", cvRouter);

app.get("/",(req,res)=>{
    res.json({message: "Merhaba Dünya"})
})

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`api running on ${port}`));