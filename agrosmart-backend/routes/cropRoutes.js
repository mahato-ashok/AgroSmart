const express = require("express");
const { listCrops, addCrop } = require("../controllers/cropController");
const router = express.Router();

router.get("/", listCrops);
router.post("/", addCrop);

module.exports = router;
