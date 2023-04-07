require("dotenv").config();

const app = require("./server.js");

const { MongoClient } = require("mongodb");
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);


app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
