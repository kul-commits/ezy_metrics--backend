const { fetchAndStoreData } = require('../services/dataService');

const fetchData = async (req, res) => {
  try {
    const analysis = await fetchAndStoreData();
    res.status(200).json({ message: 'Data fetched and stored successfully', analysis });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch data', error: err.message });
  }
};

module.exports = { fetchData };