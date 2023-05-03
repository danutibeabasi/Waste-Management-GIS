// Import the database connection
const db = require('../db.js');

// Get all transportation technologies
exports.getAllTransportationTechnology = async (req, res) => {
  try {
    const results = await db.manyOrNone('SELECT * FROM transport_technology');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a transportation technology by ID
exports.getTransportationTechnologyById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await db.oneOrNone('SELECT * FROM transport_technology WHERE id = $1', [id]);
    if (results) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ error: 'Transportation technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new transportation technology
exports.createTransportationTechnology = async (req, res) => {
  try {
    const { name, description } = req.body;
    const results = await db.one('INSERT INTO transport_technology (name, description) VALUES ($1, $2) RETURNING *', [name, description]);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a transportation technology by ID
exports.updateTransportationTechnology = async (req, res) => {
  try {
    const { id, name, description } = req.body;
    const results = await db.result('UPDATE transport_technology SET name = $1, description = $2 WHERE id = $3', [name, description, id]);
    if (results.rowCount === 1) {
      res.status(200).json({ message: 'Transportation technology updated successfully.' });
    } else {
      res.status(404).json({ error: 'Transportation technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a transportation technology by ID
exports.deleteTransportationTechnology = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await db.result('DELETE FROM transport_technology WHERE id = $1', [id]);
    if (results.rowCount === 1) {
      res.status(200).json({ message: 'Transportation technology deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Transportation technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
