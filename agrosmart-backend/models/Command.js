const mongoose = require("mongoose");
const commandSchema = new mongoose.Schema({
  device: { type: mongoose.Schema.Types.ObjectId, ref: "Device" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commandType: String,   // e.g. "OPEN_VALVE"
  payload: Object,
  status: { type: String, default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Command", commandSchema);
