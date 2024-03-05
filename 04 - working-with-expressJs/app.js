const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Middleware to parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
