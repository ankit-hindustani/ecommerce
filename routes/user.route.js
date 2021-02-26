const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user.controller");
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../controllers/auth.controller");

router.get("/secret/:userId", requireSignin, (req, res) => {
  res.json({
    user: req.profile,
  });
});
router.param("userId", userById);

module.exports = router;
