const express = require("express");
const { getWalletBalance, addPoints, redeemWalletPoints } = require("../controllers/walletController");

const router = express.Router();

router.get("/:userId", getWalletBalance);
router.post("/add-points", addPoints);
router.post("/redeem", redeemWalletPoints);

module.exports = router;
