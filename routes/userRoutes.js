const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const User = require("../models/User");
const router = express.Router();

// Example: Only logged-in users
router.get("/profile",protect,async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

// Example: Only admin
router.get("/all-users",protect,adminOnly, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

module.exports = router;
