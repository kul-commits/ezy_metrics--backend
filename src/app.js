const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');
const reportRoutes = require('./routes/reportRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/data', dataRoutes);
app.use('/api/report', reportRoutes);

module.exports = app;