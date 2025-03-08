const express = require("express");
const { getProducts, getProductById, createProduct, upgradeProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.post("/:id/upgrade", upgradeProduct);

module.exports = router;
