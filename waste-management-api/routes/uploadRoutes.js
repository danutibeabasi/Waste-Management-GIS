const express = require('express');
const multer = require('multer');
const Papa = require('papaparse');
const XLSX = require('xlsx');


// Import the controllers
const wasteRecordController = require('../controllers/wasteRecordController.js');
const treatmentRecordController = require('../controllers/treatmentRecordController.js');

const controllers = {
  wasteRecord: wasteRecordController.createWasteRecord,
  treatmentRecord: treatmentRecordController.createTreatmentRecord,
  // Add more if needed
};

const uploadRoutes = express.Router();
const upload = multer({ storage: multer.memoryStorage() });


uploadRoutes.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
  }

  const fileType = req.file.originalname.split('.').pop();

  let parsedData;

  if (fileType === 'csv') {
      parsedData = Papa.parse(req.file.buffer.toString(), { header: true }).data;
  } else if (fileType === 'xlsx') {
      const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      parsedData = XLSX.utils.sheet_to_json(worksheet);
  } else {
      return res.status(400).json({ error: 'Unsupported file type.' });
  }

  for (const record of parsedData) {
      try {
          const result = await controllers[req.query.controller](record);
          if (!result) {
              console.error(`Failed to insert record: ${JSON.stringify(record)}`);
          }
      } catch (error) {
          console.error(`Failed to insert record: ${JSON.stringify(record)}`, error);
      }
  }

  res.status(201).json({ message: 'Data processed successfully.' });
});


module.exports = uploadRoutes;