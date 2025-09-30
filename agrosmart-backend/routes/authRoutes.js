const express = require("express");
const { signup, login, me } = require("../controllers/authController");
const auth = require("../middleware/auth");
const router = express.Router();

console.log("signup",signup);
router.post("/signup", signup);
console.log("login",login);
router.post("/login", login);
console.log("auth",auth);
router.get("/me", auth, me);

module.exports = router;
