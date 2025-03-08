const Product = require("../models/Product");

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Get product by ID and increase views
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });

        product.views += 1;
        await product.save();

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Create new product
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, sellerId } = req.body;
        const newProduct = new Product({ name, description, price, sellerId });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Upgrade product
exports.upgradeProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });

        product.upgraded = true;
        await product.save();

        res.json({ message: "Product upgraded successfully", product });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
