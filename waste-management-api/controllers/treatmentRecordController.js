// Import the database connection
const db = require('../db.js');

// Create a new treatment record
exports.createTreatmentRecord = async (req, res) => {
  try {
    const { treatment_site_id, wastetype_id, treatment_technology_id, weight, treatment_date } = req.body;
    const result = await db.one(
      `INSERT INTO treatment_records (treatment_site_id, wastetype_id, treatment_technology_id, weight, treatment_date)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [treatment_site_id, wastetype_id, treatment_technology_id, weight, treatment_date]
    );

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all treatment records
exports.getAllTreatmentRecords = async (req, res) => {
  try {
    const results = await db.manyOrNone('SELECT * FROM treatment_records');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get treatment record by id
exports.getTreatmentRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone('SELECT * FROM treatment_records WHERE id = $1', [id]);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Treatment record not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a treatment record by ID
exports.updateTreatmentRecord = async (req, res) => {
  try {
    const { id, treatment_site_id, wastetype_id, treatment_technology_id, weight, treatment_date } = req.body;

    const result = await db.result(
      `UPDATE treatment_records
       SET treatment_site_id = $2, wastetype_id = $3, treatment_technology_id = $4, weight = $5, treatment_date = $6
       WHERE id = $1`,
      [id, treatment_site_id, wastetype_id, treatment_technology_id, weight, treatment_date]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: 'Treatment record updated successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment record not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a treatment record by ID
exports.deleteTreatmentRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.result('DELETE FROM treatment_records WHERE id = $1', [id]);

    if (result.rowCount === 1) {
      res.status(200).json({ message: 'Treatment record deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment record not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
