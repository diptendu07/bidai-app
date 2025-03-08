require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./models/User");
const Product = require("./models/Product");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const walletRoutes = require("./routes/walletRoutes");
const Razorpay = require("razorpay");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Error: ", err));

// Wallet Routes
const walletRouter = express.Router();

// Get wallet balance
walletRouter.get("/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ error: "User not found" });
        
        res.json({ walletBalance: user.walletBalance });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Add referral points
walletRouter.post("/add-points", async (req, res) => {
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
});

// Redeem points for extra views
walletRouter.post("/redeem", async (req, res) => {
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
        
        res.json({ message: "Points redeemed successfully", walletBalance: user.walletBalance, productViews: product.views });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Attach routes to the app
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/wallet", walletRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
