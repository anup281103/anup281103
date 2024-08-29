const mongoose = require("mongoose");

Product.createProduct = async (title, description, price, categoryId) => {
  const product = new Product({ title, description, price, categoryId });
  await product.save();
  return product;
};
Product.getProducts = async () => {
  const products = await Product.find().exec();
  return products;
};
Product.updateProduct = async (id, title, description, price, categoryId) => {
  const product = await Product.findByIdAndUpdate(
    id,
    { title, description, price, categoryId },
    { new: true }
  ).exec();
  return product;
};
Product.deleteProduct = async (id) => {
  await Product.findByIdAndRemove(id).exec();
};

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
