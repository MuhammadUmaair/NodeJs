const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("frontend/products", {
      prods: products,
      pageTitle: "All Products",
      path: "/",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("frontend/index", {
      prods: products,
      pageTitle: "Product",
      path: "/frontend/products",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("frontend/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.getChekout = (req, res, next) => {
  res.render("frontend/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};
