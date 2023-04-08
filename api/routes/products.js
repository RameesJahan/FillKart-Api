const express = require("express");
const router = express.Router();
const ProductsCtrl = require("../controller/products");


router.get('/',ProductsCtrl.apiGetProducts);

router.get('/view/:id', ProductsCtrl.apiGetOneProduct);

router.get('/categories',ProductsCtrl.apiGetCategories);
router.get('/categories/:name',ProductsCtrl.apiGetCategoryItems);

module.exports = router;
