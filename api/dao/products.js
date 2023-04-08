const mongodb = require("mongodb");
const { ObjectId } = require('mongodb');

let products;

class ProductsDAO{
  static async injectDB(conn) {
    if (products) {
      return;
    }
    try {
      products = await conn.db("FillKart").collection("products");
      console.log("Connection established")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }
  
  static async getProducts(){
    return products.find({}).toArray();
  }
  
  static async getOneProduct(myId){
    try {
      return await products.findOne({ _id: new ObjectId(myId) })
    } catch (e) {
      console.error(`Unable to get Product: ${e}`)
      return { error: e.message }
    }
  }
  
  static async getCategories(){
    try {
      return products.distinct("category");
    } catch (e) {
      console.error(`Unable to Procces: ${e}`);
    }
  }
  
  static async getCategoryItems(cat){
    try {
      return await products.find({ category: cat }).toArray();
    } catch (e) {
      console.error(`Unable to get Product: ${e}`)
      return { error: e.message }
    }
  }
}

module.exports = ProductsDAO;