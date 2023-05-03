// Import the database connection
const db = require('/home/dan/wastemanagement-project/waste-management-api/db.js');

// Create a new waste container in the database
exports.createWasteContainer = async (req, res) => {
  try {
    const { capacity, description } = req.body;
    const result = await db.oneOrNone(
      `INSERT INTO "waste_containers" ("capacity", "description")
       VALUES ($1, $2) RETURNING *`,
      [capacity, description]
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

// Get all waste containers
exports.getAllWasteContainers = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT "id", "capacity", "description" FROM "waste_containers"'
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get waste container by id
exports.getWasteContainerById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone(
      'SELECT "id", "capacity", "description" FROM "waste_containers" WHERE "id" = $1',
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
    const { id, capacity, description } = req.body;

    const result = await db.result(
      `UPDATE "waste_containers"
       SET "capacity" = $2, "description" = $3
       WHERE "id" = $1`,
      [id, capacity, description]
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
