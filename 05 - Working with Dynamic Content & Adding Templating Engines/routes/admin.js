const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const router = express.Router();

// Route for adding a product (GET request)
router.get("/add-product", (req, res, next) => {
  // Send a form to add a product
  res.sendFile(path.join(rootDir, "views", "add-product.html"));

  // Continue to the next middleware
  // next();
});

// Route for handling product addition (POST request)
router.post("/add-product", (req, res, next) => {
  // Log the incoming data from the form
  console.log(req.body);
  // Redirect to the home page
  res.redirect("/");
});

module.exports = router;
