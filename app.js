require("dotenv").config();
const express = require("express");

const { MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;


app.use(express.json());


const client = new MongoClient(uri);

app.use("/api/", (req, res) => {

    res.send('Hello World!');
    
});
app.use("*" ,(req ,res)=> res.send("404 Not Found"));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
