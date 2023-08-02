// Import the database connection
const db = require('../db.js');

// Get all transportation technologies
exports.getAllTransportationTechnology = async (req, res) => {
  try {
    const result = await db.manyOrNone('SELECT * FROM transport_technology');
    return result;  // return the result instead of using res.json()
  } catch (err) {
    console.error(err);  // log error for debugging
    throw err;
  }
};

// Get a transportation technology by ID
exports.getTransportationTechnologyById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone('SELECT * FROM transport_technology WHERE id = $1', [id]);
    if (result) {
      res.status(200).json(result);
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
    const result = await db.one('INSERT INTO transport_technology (name, description) VALUES ($1, $2) RETURNING *', [name, description]);
    console.log("DB Result: ", result); // Log the database result
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new transportation technology." });
    }
  } catch (err) {
    console.error("DB Error: ", err); // Log any error that occurs
    res.status(500).json({ error: err.message });
  }
};

// Update a transportation technology by ID
exports.updateTransportationTechnology = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;  // Assume id is a URL parameter
    const result = await db.result('UPDATE transport_technology SET name = $1, description = $2 WHERE id = $3', [name, description, id]);
    if (result.rowCount === 1) {
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
    const result = await db.result('DELETE FROM transport_technology WHERE id = $1', [id]);
    if (result.rowCount === 1) {
      res.status(200).json({ message: 'Transportation technology deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Transportation technology not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
