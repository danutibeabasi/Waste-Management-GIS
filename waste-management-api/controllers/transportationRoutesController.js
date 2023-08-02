// Import the database connection
const db = require('../db.js');

// Create a new transportation route
exports.createTransportationRoute = async (req, res) => {
  try {
    const { treatment_site_id, vehicle_id, total_distance, total_duration, timestamp } = req.body;

    const result = await db.oneOrNone(
      `INSERT INTO "transportation_routes" ("treatment_site_id", "vehicle_id", "total_distance", "total_duration", "timestamp")
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [treatment_site_id, vehicle_id, total_distance, total_duration, timestamp]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new transportation route." });
    }
  } catch (err) {
    console.error("DB Error: ", err);
    res.status(500).json({ error: err.message });
  }
};

// Get all transportation routes
exports.getAllTransportationRoutes = async (req, res) => {
  try {
    const result = await db.manyOrNone('SELECT * FROM "transportation_routes"');
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get transportation route by ID
exports.getTransportationRouteById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.oneOrNone(
      'SELECT * FROM "transportation_routes" WHERE "id" = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Transportation route not found." });
    }
  } catch (err) {
    console.error("DB Error: ", err);
    res.status(500).json({ error: err.message });
  }
};

// Update a transportation route
exports.updateTransportationRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const { treatment_site_id, vehicle_id, total_distance, total_duration, timestamp } = req.body;

    const result = await db.result(
      `UPDATE "transportation_routes"
       SET "treatment_site_id" = $2, "vehicle_id" = $3, "total_distance" = $4, "total_duration" = $5, "timestamp" = $6
       WHERE "id" = $1`,
      [id, treatment_site_id, vehicle_id, total_distance, total_duration, timestamp]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Transportation route updated successfully." });
    } else {
      res.status(404).json({ error: "Transportation route not found." });
    }
  } catch (err) {
    console.error("DB Error: ", err);
    res.status(500).json({ error: err.message });
  }
};

// Delete a transportation route
exports.deleteTransportationRoute = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.result(
      `DELETE FROM "transportation_routes" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Transportation route deleted successfully." });
    } else {
      res.status(404).json({ error: "Transportation route not found." });
    }
  } catch (err) {
    console.error("DB Error: ", err);
    res.status(500).json({ error: err.message });
  }
};
