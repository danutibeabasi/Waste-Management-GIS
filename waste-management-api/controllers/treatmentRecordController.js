// Import the database connection
const db = require('../db.js');

// Create a new treatment record
exports.createTreatmentRecord = async (req, res) => {
  try {
    const { treatment_site_technology_id, waste_record_id, waste_type_id, treated_weight, treatment_date, energy_consumed, data_source_id } = req.body;
    
    const result = await db.one(
      `INSERT INTO treatment_records (treatment_site_technology_id, waste_record_id, waste_type_id, treated_weight, treatment_date, energy_consumed, data_source_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [treatment_site_technology_id, waste_record_id, waste_type_id, treated_weight, treatment_date, energy_consumed, data_source_id]
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
    const { id, treatment_site_technology_id, waste_record_id, waste_type_id, treated_weight, treatment_date, energy_consumed, data_source_id } = req.body;

    const result = await db.result(
      `UPDATE treatment_records
       SET treatment_site_technology_id = $2, waste_record_id = $3, waste_type_id = $4, treated_weight = $5, treatment_date = $6, energy_consumed = $7, data_source_id = $8
       WHERE id = $1`,
      [id, treatment_site_technology_id, waste_record_id, waste_type_id, treated_weight, treatment_date, energy_consumed, data_source_id]
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
// Get treatment records by treatment site ID
exports.getTreatmentRecordsBySiteId = async (req, res) => {
  try {
    const { treatment_site_id } = req.params;
    const query = `
      SELECT tr.*
      FROM treatment_records AS tr
      JOIN treatment_site_technologies AS tst
      ON tr.treatment_site_technology_id = tst.id
      WHERE tst.treatment_site_id = $1;
    `;

    const results = await db.manyOrNone(query, [treatment_site_id]);

    if (results.length) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ error: 'No treatment records found for the given treatment site ID.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
