// Import the database connection
const db = require('../db.js');

// Create a new transportation vehicle
exports.createTransportationVehicle = async (req, res) => {
  try {
    const { vehicle_type, capacity, fuel_type, weight_capacity, Container_capacity, waste_container_id } = req.body;

    const result = await db.oneOrNone(
      `INSERT INTO "transportation_vehicles" ("vehicle_type", "capacity", "fuel_type", "weight_capacity", "Container_capacity", "waste_container_id")
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [vehicle_type, capacity, fuel_type, weight_capacity, Container_capacity, waste_container_id]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new transportation vehicle." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all transportation vehicles
exports.getAllTransportationVehicles = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT * FROM "transportation_vehicles"'
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get transportation vehicle by ID
exports.getTransportationVehicleById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.oneOrNone(
      'SELECT * FROM "transportation_vehicles" WHERE "id" = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Transportation vehicle not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a transportation vehicle
exports.updateTransportationVehicle = async (req, res) => {
  try {
    const { vehicle_type, capacity, fuel_type, weight_capacity, Container_capacity, waste_container_id } = req.body;
    const { id } = req.params;

    const result = await db.result(
      `UPDATE "transportation_vehicles"
       SET "vehicle_type" = $1, "capacity" = $2, "fuel_type" = $3, "weight_capacity" = $4, "Container_capacity" = $5, "waste_container_id" = $6
       WHERE "id" = $7`,
      [vehicle_type, capacity, fuel_type, weight_capacity, Container_capacity, waste_container_id, id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Transportation vehicle updated successfully." });
    } else {
      res.status(404).json({ error: "Transportation vehicle not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a transportation vehicle
exports.deleteTransportationVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.result(
      `DELETE FROM "transportation_vehicles" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Transportation vehicle deleted successfully." });
    } else {
      res.status(404).json({ error: "Transportation vehicle not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
