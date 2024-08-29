const mongoose = require("mongoose");
Category.createCategory = async (title, parentId) => {
  const category = new Category({ title, parentId });
  await category.save();
  return category;
};
Category.getCategories = async () => {
  const categories = await Category.find().exec();
  return categories;
};
Category.updateCategory = async (id, title, parentId) => {
  const category = await Category.findByIdAndUpdate(
    id,
    { title, parentId },
    { new: true }
  ).exec();
  return category;
};
Category.deleteCategory = async (id) => {
  await Category.findByIdAndRemove(id).exec();
};

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
