const express = require("express");
const { getUserWallet, addReferralPoints, redeemPoints } = require("../controllers/userController");

const router = express.Router();

router.get("/:userId/wallet", getUserWallet);
router.post("/:userId/add-points", addReferralPoints);
router.post("/:userId/redeem", redeemPoints);

module.exports = router;
