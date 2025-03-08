const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    views: { type: Number, default: 0 },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    upgraded: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
