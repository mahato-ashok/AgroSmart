const mongoose = require("mongoose");
const deviceSchema = new mongoose.Schema({
  deviceId: { type: String, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  token: String,
}, { timestamps: true });
module.exports = mongoose.model("Device", deviceSchema);
