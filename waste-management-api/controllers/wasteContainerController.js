// Import the database connection
const db = require('/home/dan/wastemanagement-project/waste-management-api/db.js');

// Create a new waste container in the database
exports.createWasteContainer = async (req, res) => {
  try {
    const { capacity, description, weight, data_source_id } = req.body;
    const result = await db.oneOrNone(
      `INSERT INTO "waste_containers" ("capacity", "description", "weight", "data_source_id")
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [capacity, description, weight, data_source_id]
    );

    if (result) {
      console.log(result);
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new waste container." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllWasteContainers = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT "id", "capacity", "description", "weight", "data_source_id" FROM "waste_containers"'
    );
    
    return result;  // return the result instead of using res.json()
  } catch (err) {
    console.error(err);  // log error for debugging
    throw err;
  }
};

// Get waste container by id
exports.getWasteContainerById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone(
      'SELECT "id", "capacity", "description", "weight", "data_source_id" FROM "waste_containers" WHERE "id" = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Waste container not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing waste container in the database
exports.updateWasteContainer = async (req, res) => {
  try {
    const { capacity, description, weight, data_source_id } = req.body;
    const { id } = req.params;  // Assume id is a URL parameter

    const result = await db.result(
      `UPDATE "waste_containers"
       SET "capacity" = $1, "description" = $2, "weight" = $3, "data_source_id" = $4
       WHERE "id" = $5`,
      [capacity, description, weight, data_source_id, id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Waste container updated successfully." });
    } else {
      res.status(404).json({ error: "Waste container not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a waste container from the database
exports.deleteWasteContainer = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.result(
      `DELETE FROM "waste_containers" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Waste container deleted successfully." });
    } else {
      res.status(404).json({ error: "Waste container not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
