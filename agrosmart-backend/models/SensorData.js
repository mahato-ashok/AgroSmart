const mongoose = require("mongoose");
const sensorDataSchema = new mongoose.Schema({
  device: { type: mongoose.Schema.Types.ObjectId, ref: "Device" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  soilMoisture: Number,
  temperature: Number,
  humidity: Number,
  waterLevel: Number,
}, { timestamps: true });

module.exports = mongoose.model("SensorData", sensorDataSchema);
