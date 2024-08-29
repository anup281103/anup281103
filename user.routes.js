const express = require("express");
const router = express.Router();
const User = require("./user.model");

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find().exec();
  res.json(users);
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).exec();
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

// Create a new user
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// Update a user
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).exec();
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

// Delete a user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndRemove(req.params.id).exec();
  res.json({ message: "User deleted" });
});

module.exports = router;
