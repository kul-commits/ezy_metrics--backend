const openai = require('openai');
const { readJSONFile } = require('./fileHandler');


openai.apiKey = process.env.OPENAI_API_KEY;

const transformLeadsData = () => {
  const rawLeads = readJSONFile('leads.json');
  return rawLeads.map(lead => ({
    name: lead.name,
    email: lead.email,
    status: lead.status.toUpperCase(),
  }));
};

const transformCampaignsData = () => {
  const rawCampaigns = readJSONFile('campaigns.json');
  return rawCampaigns.map(campaign => ({
    name: campaign.name,
    budget: campaign.budget * 1.1, // any random change
    startDate: new Date(campaign.startDate),
    endDate: new Date(campaign.endDate),
  }));
};

const analyzeDataWithChatGPT = async (leads, campaigns) => {
  const prompt = `
    Analyze the following data:
    Leads: ${JSON.stringify(leads, null, 2)}
    Campaigns: ${JSON.stringify(campaigns, null, 2)}

    Provide insights on the performance of the campaigns and the quality of the leads.
  `;

  try {
    const response = await openai.Completion.create({
      engine: 'davinci-codex',
      prompt: prompt,
      maxTokens: 500,
    });
    return response.choices[0].text.trim();
  } catch (err) {
    console.error('Error analyzing data with ChatGPT:', err.message);
    throw new Error('Data analysis failed');
  }
};

module.exports = { transformLeadsData, transformCampaignsData, analyzeDataWithChatGPT };