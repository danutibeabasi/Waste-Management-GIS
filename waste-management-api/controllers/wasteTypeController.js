// Import the database connection
const db = require('/home/dan/wastemanagement-project/waste-management-api/db.js');

// Create a new waste type in the database
exports.createWasteType = async (req, res) => {
  try {
    const { name, description } = req.body;
    const result = await db.oneOrNone(
      `INSERT INTO "waste_types" ("name", "description")
       VALUES ($1, $2) RETURNING *`,
      [name, description]
    );

    if (result) {
      console.log(result);
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new waste type." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all waste types from the database
exports.getAllWasteTypes = async (req, res) => {
  try {
    const result = await db.manyOrNone('SELECT * FROM "waste_types"');

    // If the result is empty, return an empty array
    if (!result || result.length === 0) {
      if (res) {
        res.status(404).json({ error: "No waste types found." });
      } else {
        return [];
      }
    }

    // If the result is not empty, return the result
    if (res) {
      res.status(200).json(result);
    } else {
      return result;
    }

  } catch (err) {
    if (res) {
      res.status(500).json({ error: err.message });
    } else {
      console.error(err);  // log error for debugging
      throw err;  // throw the error to be caught in the route
    }
  }
};


// Get waste type by id
exports.getWasteTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone('SELECT * FROM "waste_types" WHERE "id" = $1', [id]);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Waste type not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing waste type in the database
exports.updateWasteType = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;  // Assume id is a URL parameter

    const result = await db.result(
      `UPDATE "waste_types"
       SET "name" = $1, "description" = $2
       WHERE "id" = $3`,
      [name, description, id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Waste type updated successfully." });
    } else {
      res.status(404).json({ error: "Waste type not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Delete a waste type from the database
exports.deleteWasteType = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.result(
      `DELETE FROM "waste_types" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Waste type deleted successfully." });
    } else {
      res.status(404).json({ error: "Waste type not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
