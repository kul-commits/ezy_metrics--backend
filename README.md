# EzyMetrics Backend

## Description
EzyMetrics Backend is a Node.js service that integrates with CRM and marketing platforms to fetch, process, analyze, and report data. It uses MongoDB as the database, local JSON files for raw data storage, and the OpenAI API for data analysis. The service includes an ETL (Extract, Transform, Load) process and generates reports in PDF or CSV format.

## Features
- **Data Integration**: Simulates fetching lead and campaign data from dummy CRM and marketing platforms.
- **ETL Process**: Transforms raw data and stores it in a MongoDB database.
- **Data Analysis**: Utilizes the OpenAI API (ChatGPT) to analyze lead and campaign data.
- **Reporting**: Generates reports in PDF or CSV format.
- **Email Alerts**: Sends email notifications for specific conditions.
- **Data Storage**: Raw data is stored locally in JSON files.

## Prerequisites
- **Node.js** (version 14 or higher)
- **MongoDB** (locally or a remote connection)
- **OpenAI API Key** (for using the ChatGPT integration)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd ezy_metrics--backend
2. **Install Dependencies
   - npm install

3. **Create a .env file

   
  - MONGO_URI=mongodb://localhost:27017/ezy-metrics
  - EMAIL_USER=your_email@gmail.com
  - EMAIL_PASS=your_email_password
  - OPENAI_API_KEY=your_openai_api_key

4. Run MondoDB

5. Run the Server
  - npm run dev
