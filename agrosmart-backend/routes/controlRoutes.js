const express = require("express");
const auth = require("../middleware/auth");
const { sendCommand, getPendingCommands } = require("../controllers/controlController");
const router = express.Router();

router.post("/valve", auth, sendCommand);
router.get("/pending", auth, getPendingCommands);

module.exports = router;
