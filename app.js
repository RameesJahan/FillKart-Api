require("dotenv").config();

const app = require("./server.js");
const ProductsDAO = require("./api/dao/products");

const { MongoClient } = require("mongodb");
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

MongoClient.connect(
  uri,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async client => {
    await ProductsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on http://localhost:${port}`);
    });
  });

