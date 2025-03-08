const User = require("../models/User");
const Product = require("../models/Product");

// Get wallet balance
exports.getWalletBalance = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        res.json({ walletBalance: user.walletBalance });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Add referral points to wallet
exports.addPoints = async (req, res) => {
    try {
        const { userId, points } = req.body;
        if (!userId || !points) return res.status(400).json({ error: "Invalid request" });

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        user.walletBalance = Math.min(user.walletBalance + points, 100000);
        await user.save();

        res.json({ message: "Points added successfully", walletBalance: user.walletBalance });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Redeem points for extra views
exports.redeemWalletPoints = async (req, res) => {
    try {
        const { userId, productId, points } = req.body;
        if (!userId || !productId || !points) return res.status(400).json({ error: "Invalid request" });

        const user = await User.findById(userId);
        if (!user || user.walletBalance < points) return res.status(400).json({ error: "Insufficient balance" });

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ error: "Product not found" });

        user.walletBalance -= points;
        product.views += points;
        await user.save();
        await product.save();

        res.json({ 
            message: "Points redeemed successfully", 
            walletBalance: user.walletBalance, 
            productViews: product.views 
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
