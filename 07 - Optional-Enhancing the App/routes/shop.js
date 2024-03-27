const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getProducts);

router.get("/product", shopController.getIndex);
router.get("/cart", shopController.getCart);
router.get("/checkout", shopController.getChekout);

module.exports = router;
