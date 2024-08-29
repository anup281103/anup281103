const express = require("express");
const app = express();
const categoryRoutes = require("./category.routes");
const userRoutes = require("./user.routes");

app.use("/api/users", userRoutes);
const productRoutes = require("./product.routes");

app.use("/api/products", productRoutes);

app.use("/api/categories", categoryRoutes);
