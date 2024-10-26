const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');
const PDFDocument = require('pdfkit');
const { Parser } = require('json2csv');

const generateReport = async (req, res) => {
  const { format } = req.query;

  try {
    const leads = await Lead.find();
    const campaigns = await Campaign.find();

    if (format === 'pdf') {
      const doc = new PDFDocument();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
      doc.pipe(res);
      doc.text('Leads and Campaigns Report', { align: 'center' });
      doc.text(JSON.stringify({ leads, campaigns }, null, 2));
      doc.end();
    } else if (format === 'csv') {
      const parser = new Parser();
      const csv = parser.parse({ leads, campaigns });
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=report.csv');
      res.send(csv);
    } else {
      res.status(400).json({ message: 'Invalid format' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to generate report', error: err.message });
  }
};

module.exports = { generateReport };