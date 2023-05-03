// Import the database connection
const db = require('../db.js');

// Get all treatment technologies
exports.getAllTreatmentTechnologies = async (req, res) => {
  try {
    const results = await db.manyOrNone('SELECT * FROM treatment_technologies');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a treatment technology by ID
exports.getTreatmentTechnologyById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await db.oneOrNone('SELECT * FROM treatment_technologies WHERE id = $1', [id]);
    if (results) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ error: 'Treatment technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new treatment technology
exports.createTreatmentTechnology = async (req, res) => {
  try {
    const { name, description } = req.body;
    const results = await db.one('INSERT INTO treatment_technologies (name, description) VALUES ($1, $2) RETURNING *', [name, description]);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a treatment technology by ID
exports.updateTreatmentTechnology = async (req, res) => {
  try {
    const { id, name, description } = req.body;
    const results = await db.result('UPDATE treatment_technologies SET name = $1, description = $2 WHERE id = $3', [name, description, id]);
    if (results.rowCount === 1) {
      res.status(200).json({ message: 'Treatment technology updated successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a treatment technology by ID
exports.deleteTreatmentTechnology = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await db.result('DELETE FROM treatment_technologies WHERE id = $1', [id]);
    if (results.rowCount === 1) {
      res.status(200).json({ message: 'Treatment technology deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
