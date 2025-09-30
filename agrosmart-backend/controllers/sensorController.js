const SensorData = require("../models/SensorData");
exports.postData = async (req, res) => {
  try {
    const { soilMoisture, temperature, humidity, waterLevel } = req.body;
    const data = await SensorData.create({
      user: req.user.id,
      soilMoisture,
      temperature,
      humidity,
      waterLevel,
    });
    res.json({ message: "Data saved", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLatest = async (req, res) => {
  const latest = await SensorData.findOne({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(latest);
};
