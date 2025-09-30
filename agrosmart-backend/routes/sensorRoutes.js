const express = require("express");
const auth = require("../middleware/auth");
const { postData, getLatest } = require("../controllers/sensorController");
const router = express.Router();

router.post("/data", auth, postData);
router.get("/latest", auth, getLatest);

module.exports = router;
