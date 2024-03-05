const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Route for adding a product (GET request)
app.get("/add-product", (req, res, next) => {
  // Send a form to add a product
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );

  //request can't continue journey, so we add next function that allows the request to continue to the next middleware in line
  //   next();
});

// Route for handling product addition (POST request)
app.post("/product", (req, res, next) => {
  // Log the incoming data from the form
  console.log(req.body);
  // Redirect to the home page
  res.redirect("/");
});

// Route for the home page
app.get("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
