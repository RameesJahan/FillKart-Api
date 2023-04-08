const ProductsDAO = require("../dao/products");

class ProductsCtrl{
  static async apiGetProducts(req , res , next){
    try {
      const products = await ProductsDAO.getProducts();
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  
  static async apiGetOneProduct(req , res , next){
    try {
      const id = req.params.id;
      const product = await ProductsDAO.getOneProduct(id);
      res.status(200).json(product);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  
  static async apiGetCategories(req , res , next){
    try {
      const cat = await ProductsDAO.getCategories();
      res.status(200).json(cat);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  
  static async apiGetCategoryItems(req , res , next){
    try {
      const name = req.params.name;
      const catItems = await ProductsDAO.getCategoryItems(name);
      res.status(200).json(catItems);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  
}

module.exports = ProductsCtrl;
