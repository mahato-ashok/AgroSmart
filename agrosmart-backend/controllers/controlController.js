const Command = require("../models/Command");

exports.sendCommand = async (req, res) => {
  const { commandType, payload } = req.body;
  const command = await Command.create({ user: req.user.id, commandType, payload });
  res.json({ message: "Command queued", command });
};

exports.getPendingCommands = async (req, res) => {
  const pending = await Command.find({ user: req.user.id, status: "pending" });
  res.json(pending);
};
