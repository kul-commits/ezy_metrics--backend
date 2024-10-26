const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');
const { transformLeadsData, transformCampaignsData, analyzeDataWithChatGPT } = require('../utils/etlProcess');

const fetchAndStoreData = async () => {
  const transformedLeads = transformLeadsData();
  const transformedCampaigns = transformCampaignsData();


  await Lead.insertMany(transformedLeads);
  await Campaign.insertMany(transformedCampaigns);


  const analysis = await analyzeDataWithChatGPT(transformedLeads, transformedCampaigns);

  return analysis;
};

module.exports = { fetchAndStoreData };