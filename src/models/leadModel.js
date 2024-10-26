const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: String,
});

module.exports = mongoose.model('Lead', LeadSchema);