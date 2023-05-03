// Import the database connection
const db = require('../db.js');

// Create a new assigned waste container in the database
exports.createAssignedWasteContainer = async (req, res) => {
  try {
    const { waste_container_id, collection_point_id, waste_type_id } = req.body;
    const result = await db.oneOrNone(
      `INSERT INTO "assigned_waste_container" ("waste_container_id", "collection_point_id", "waste_type_id")
       VALUES ($1, $2, $3) RETURNING *`,
      [waste_container_id, collection_point_id, waste_type_id]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new assigned waste container." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all Assigned Waste Containers
exports.getAllAssignedWasteContainers = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT "id", "waste_container_id", "collection_point_id", "waste_type_id" FROM "assigned_waste_container"'
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get assigned waste container by id
exports.getAssignedWasteContainerById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone(
      'SELECT "id", "waste_container_id", "collection_point_id", "waste_type_id" FROM "assigned_waste_container" WHERE "id" = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Assigned waste container not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing assigned waste container in the database
exports.updateAssignedWasteContainer = async (req, res) => {
  try {
    const { id, waste_container_id, collection_point_id, waste_type_id } = req.body;

    const result = await db.result(
      `UPDATE "assigned_waste_container"
       SET "waste_container_id" = $2, "collection_point_id" = $3, "waste_type_id" = $4
       WHERE "id" = $1`,
      [id, waste_container_id, collection_point_id, waste_type_id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Assigned waste container updated successfully." });
    } else {
      res.status(404).json({ error: "Assigned waste container not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an assigned waste container from the database
exports.deleteAssignedWasteContainer = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.result(
      `DELETE FROM "assigned_waste_container" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
        res.status(200).json({ message: "Waste collection container deleted successfully." });
    } else {
      res.status(404).json({ error: "Waste collection container not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

