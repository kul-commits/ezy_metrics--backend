const fs = require('fs');
const path = require('path');

const readJSONFile = (filename) => {
  const filePath = path.join(__dirname, '../../data', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

module.exports = { readJSONFile };