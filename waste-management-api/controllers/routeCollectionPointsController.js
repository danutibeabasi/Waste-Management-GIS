// Import the database connection
const db = require('../db.js');

// Create a new route collection point
exports.createRouteCollectionPoint = async (req, res) => {
  try {
    const { transportation_route_id, collection_point_id, distance, duration, collection_order } = req.body;

    const result = await db.oneOrNone(
      `INSERT INTO "routes_collection_points" ("transportation_route_id", "collection_point_id", "distance", "duration", "collection_order")
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [transportation_route_id, collection_point_id, distance, duration, collection_order]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new route collection point." });
    }
  } catch (err) {
    console.error("DB Error: ", err);
    res.status(500).json({ error: err.message });
  }
};

// Get all route collection points
exports.getAllRouteCollectionPoints = async (req, res) => {
  try {
    const result = await db.manyOrNone('SELECT * FROM "routes_collection_points"');
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get route collection point by ID
exports.getRouteCollectionPointById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.oneOrNone(
      'SELECT * FROM "routes_collection_points" WHERE "id" = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Route collection point not found." });
    }
  } catch (err) {
    console.error("DB Error: ", err);
    res.status(500).json({ error: err.message });
  }
};

// Update a route collection point
exports.updateRouteCollectionPoint = async (req, res) => {
  try {
    const { id } = req.params;
    const { transportation_route_id, collection_point_id, distance, duration, collection_order } = req.body;

    const result = await db.result(
      `UPDATE "routes_collection_points"
       SET "transportation_route_id" = $2, "collection_point_id" = $3, "distance" = $4, "duration" = $5, "collection_order" = $6
       WHERE "id" = $1`,
      [id, transportation_route_id, collection_point_id, distance, duration, collection_order]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Route collection point updated successfully." });
    } else {
      res.status(404).json({ error: "Route collection point not found." });
    }
  } catch (err) {
    console.error("DB Error: ", err);
    res.status(500).json({ error: err.message });
  }
};

// Delete a route collection point
exports.deleteRouteCollectionPoint = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.result(
      `DELETE FROM "routes_collection_points" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Route collection point deleted successfully." });
    } else {
      res.status(404).json({ error: "Route collection point not found." });
    }
  } catch (err) {
    console.error("DB Error: ", err);
    res.status(500).json({ error: err.message });
  }
};
