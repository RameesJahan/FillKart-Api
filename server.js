const express = require("express");
const cors = require('cors');
const productsRoutes = require("./api/routes/products");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);
app.use("*" ,(req ,res)=> {
  res.status(404).json({
    message: "Not Found"
  });
  
});

module.exports = app;