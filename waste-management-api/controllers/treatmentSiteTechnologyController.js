const db = require('../db.js');

// Get all treatment site technologies
exports.getAllTreatmentSiteTechnologies = async (req, res) => {
  try {
    const results = await db.manyOrNone('SELECT * FROM treatment_site_technologies');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a treatment site technology by ID
exports.getTreatmentSiteTechnologyById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await db.oneOrNone('SELECT * FROM treatment_site_technologies WHERE id = $1', [id]);
    if (results) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ error: 'Treatment site technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new treatment site technology
exports.createTreatmentSiteTechnology = async (req, res) => {
  try {
    const { treatment_site_id, treatment_technology_id } = req.body;
    const results = await db.one('INSERT INTO treatment_site_technologies (treatment_site_id, treatment_technology_id) VALUES ($1, $2) RETURNING *', [treatment_site_id, treatment_technology_id]);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a treatment site technology by ID
exports.updateTreatmentSiteTechnology = async (req, res) => {
  try {
    const { id, treatment_site_id, treatment_technology_id } = req.body;
    const results = await db.result('UPDATE treatment_site_technologies SET treatment_site_id = $1, treatment_technology_id = $2 WHERE id = $3', [treatment_site_id, treatment_technology_id, id]);
    if (results.rowCount === 1) {
      res.status(200).json({ message: 'Treatment site technology updated successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment site technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a treatment site technology by ID
exports.deleteTreatmentSiteTechnology = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await db.result('DELETE FROM treatment_site_technologies WHERE id = $1', [id]);
    if (results.rowCount === 1) {
      res.status(200).json({ message: 'Treatment site technology deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment site technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
