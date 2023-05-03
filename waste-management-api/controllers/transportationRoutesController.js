// Import the database connection
const db = require('../db.js');

// Create a new transportation route
exports.createTransportationRoute = async (req, res) => {
  try {
    const { collection_point_id, treatment_site_id, vehicle_id, distance, duration } = req.body;
    const result = await db.oneOrNone(
      `INSERT INTO "transportation_routes" ("collection_point_id", "treatment_site_id", "vehicle_id", "distance", "duration")
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [collection_point_id, treatment_site_id, vehicle_id, distance, duration]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new transportation route." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all transportation routes
exports.getAllTransportationRoutes = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT * FROM "transportation_routes"'
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No transportation routes found." });
    }
  } catch (err) {
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
    res.status(500).json({ error: err.message });
  }
};

// Update a transportation route
exports.updateTransportationRoute = async (req, res) => {
  try {
    const { id, collection_point_id, treatment_site_id, vehicle_id, distance, duration } = req.body;
    const result = await db.result(
      `UPDATE "transportation_routes"
       SET "collection_point_id" = $2, "treatment_site_id" = $3, "vehicle_id" = $4, "distance" = $5, "duration" = $6
       WHERE "id" = $1`,
      [id, collection_point_id, treatment_site_id, vehicle_id, distance, duration]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Transportation route updated successfully." });
    } else {
      res.status(404).json({ error: "Transportation route not found." });
    }
  } catch (err) {
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
    res.status(500).json({ error: err.message });
    }
};


