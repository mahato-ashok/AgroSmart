const CropInfo = require("../models/CropInfo");

exports.listCrops = async (req, res) => {
  const crops = await CropInfo.find();
  res.json(crops);
};

exports.addCrop = async (req, res) => {
  const { cropName, idealMoistureMin, idealMoistureMax, waterPerDay, notes } = req.body;
  const crop = await CropInfo.create({ cropName, idealMoistureMin, idealMoistureMax, waterPerDay, notes });
  res.json(crop);
};