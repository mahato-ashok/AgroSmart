const mongoose = require("mongoose");
const cropInfoSchema = new mongoose.Schema({
  cropName: { type: String, unique: true },
  idealMoistureMin: Number,
  idealMoistureMax: Number,
  waterPerDay: Number,
  notes: String,
});
module.exports = mongoose.model("CropInfo", cropInfoSchema);
