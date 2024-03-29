const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");
const router = express.Router();

// Route for the home page
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "shop", path: "/" });
});

module.exports = router;
