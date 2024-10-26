const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: String,
  budget: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('Campaign', CampaignSchema);