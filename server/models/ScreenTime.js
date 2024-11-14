// models/ScreenTime.js
const mongoose = require('mongoose');

const screenTimeSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // To associate with a user (from authentication)
  appName: { type: String, required: true }, // Name of the app being tracked
  usageTime: { type: Number, default: 0 }, // Total time spent on the app (in seconds)
  lastUsed: { type: Date, default: Date.now }, // Last time the app was used
  idleTime: { type: Number, default: 0 }, // Idle time (in seconds)
});

const ScreenTime = mongoose.model('ScreenTime', screenTimeSchema);
module.exports = ScreenTime;
