// Import the database connection
const db = require('../db.js');

// Create a new waste record in the database
exports.createWasteRecord = async (req, res) => {
  try {
    const { collection_point_id, waste_type_id, weight, collection_date, building_id } = req.body;
    const result = await db.oneOrNone(
      `INSERT INTO "waste_records" ("collection_point_id", "waste_type_id", "weight", "collection_date", "building_id")
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [collection_point_id, waste_type_id, weight, collection_date, building_id]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new waste record." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all waste records from the database
exports.getAllWasteRecords = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT * FROM "waste_records"'
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No waste records found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a waste record by its ID
exports.getWasteRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone(
      'SELECT * FROM "waste_records" WHERE "id" = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Waste record not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing waste record in the database
exports.updateWasteRecord = async (req, res) => {
  try {
    const { id, collection_point_id, waste_type_id, weight, collection_date, building_id } = req.body;

    const result = await db.result(
      `UPDATE "waste_records"
       SET "collection_point_id" = $2, "waste_type_id" = $3, "weight" = $4, "collection_date" = $5, "building_id" = $6
       WHERE "id" = $1`,
      [id, collection_point_id, waste_type_id, weight, collection_date, building_id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Waste record updated successfully." });
    } else {
      res.status(404).json({ error: "Waste record not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    }
};

// Delete a waste record from the database by its ID
exports.deleteWasteRecord = async (req, res) => {
try {
const { id } = req.params;
const result = await db.result(
'DELETE FROM "waste_records" WHERE "id" = $1',
[id]
);
if (result.rowCount === 1) {
    res.status(200).json({ message: "Waste record deleted successfully." });
  } else {
    res.status(404).json({ error: "Waste record not found." });
  }
} catch (err) {
    res.status(500).json({ error: err.message });
    }
};  