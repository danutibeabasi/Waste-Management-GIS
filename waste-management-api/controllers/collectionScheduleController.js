// Import the database connection
const db = require('../db.js');

// Create a new collection schedule in the database
exports.createCollectionSchedule = async (req, res) => {
  try {
    const { collection_point_id, assign_waste_containers_id, collection_frequency, collection_day_of_week, data_source_id } = req.body;
    const result = await db.oneOrNone(
      `INSERT INTO "collection_schedule" ("collection_point_id", "assign_waste_containers_id", "collection_frequency", "collection_day_of_week", "data_source_id")
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [collection_point_id, assign_waste_containers_id, collection_frequency, collection_day_of_week, data_source_id]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new collection schedule." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all collection schedules
exports.getAllCollectionSchedules = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      `SELECT id, collection_frequency, collection_day_of_week, collection_point_id, assign_waste_containers_id, data_source_id FROM "collection_schedule"`
    );

    if (result.length) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No collection schedules found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a collection schedule by id
exports.getCollectionScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone(
      `SELECT id, collection_frequency, collection_day_of_week, collection_point_id, assign_waste_containers_id, data_source_id 
       FROM "collection_schedule" WHERE "id" = $1`,
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Collection schedule not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Update an existing collection schedule in the database
exports.updateCollectionSchedule = async (req, res) => {
  try {
    const { collection_point_id, assign_waste_containers_id, collection_frequency, collection_day_of_week, data_source_id } = req.body;
    const { id } = req.params;

    const result = await db.result(
      `UPDATE "collection_schedule"
       SET "collection_point_id" = $1, "assign_waste_containers_id" = $2, "collection_frequency" = $3, "collection_day_of_week" = $4, "data_source_id" = $5
       WHERE "id" = $6`,
      [collection_point_id, assign_waste_containers_id, collection_frequency, collection_day_of_week, data_source_id, id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Collection schedule updated successfully." });
    } else {
      res.status(404).json({ error: "Collection schedule not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Delete a collection schedule from the database
exports.deleteCollectionSchedule = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.result(
      `DELETE FROM "collection_schedule" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Collection schedule deleted successfully." });
    } else {
      res.status(404).json({ error: "Collection schedule not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
