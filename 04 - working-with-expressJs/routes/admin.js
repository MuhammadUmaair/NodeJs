const express = require("express");
const router = express.Router();

// Route for adding a product (GET request)
router.get("/add-product", (req, res, next) => {
  // Send a form to add a product
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );

  //request can't continue journey, so we add next function that allows the request to continue to the next middleware in line
  //   next();
});

// Route for handling product addition (POST request)
router.post("/product", (req, res, next) => {
  // Log the incoming data from the form
  console.log(req.body);
  // Redirect to the home page
  res.redirect("/");
});

module.exports = router;
