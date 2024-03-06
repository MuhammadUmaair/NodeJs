const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();
const products = [];

// Route for displaying the "add product" form
router.get("/add-product", (req, res, next) => {
  // Send the add-product.html file
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// Route for adding a product (POST request)
router.post("/add-product", (req, res, next) => {
  // Add the submitted product to the products array
  products.push({ title: req.body.title });
  // Redirect to the home page
  res.redirect("/");
});

// Exporting the router and products array
exports.routes = router;
exports.products = products;
