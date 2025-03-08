const User = require("../models/User");

// Get user wallet balance
exports.getUserWallet = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        res.json({ walletBalance: user.walletBalance });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Add referral points
exports.addReferralPoints = async (req, res) => {
    try {
        const { userId, points } = req.body;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        user.walletBalance = Math.min(user.walletBalance + points, 100000);
        await user.save();

        res.json({ message: "Points added successfully", walletBalance: user.walletBalance });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Redeem points
exports.redeemPoints = async (req, res) => {
    try {
        const { userId, points } = req.body;
        const user = await User.findById(userId);
        if (!user || user.walletBalance < points) return res.status(400).json({ error: "Insufficient balance" });

        user.walletBalance -= points;
        await user.save();

        res.json({ message: "Points redeemed successfully", walletBalance: user.walletBalance });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
