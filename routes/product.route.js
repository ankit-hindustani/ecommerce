const express = require("express");
const router = express.Router();

const { create } = require("../controllers/product.controller");
const { userById } = require("../controllers/user.controller");

const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../controllers/auth.controller");

//routes

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

router.param("userId", userById);

module.exports = router;