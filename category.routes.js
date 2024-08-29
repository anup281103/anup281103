const express = require("express");
const router = express.Router();
const Category = require("./category.model");

// Get all categories
router.get("/", async (req, res) => {
  const categories = await Category.find().exec();
  res.json(categories);
});

// Get a single category by ID
router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id).exec();
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }
  res.json(category);
});

// Create a new category
router.post("/", async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.json(category);
});

// Update a category
router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).exec();
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }
  res.json(category);
});

// Delete a category
router.delete("/:id", async (req, res) => {
  await Category.findByIdAndRemove(req.params.id).exec();
  res.json({ message: "Category deleted" });
});

module.exports = router;
