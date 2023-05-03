// Import the database connection
const db = require('../db.js');

// Create a new population record in the database
exports.createPopulation = async (req, res) => {
  try {
    const { commune_id, iris_id, year, population_count, building_id } = req.body;
    const result = await db.oneOrNone(
      `INSERT INTO "population" ("commune_id", "iris_id", "year", "population_count", "building_id")
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [commune_id, iris_id, year, population_count, building_id]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new population record." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all population records from the database
exports.getAllPopulation = async (req, res) => {
  try {
    const result = await db.manyOrNone('SELECT * FROM "population"');

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No population records found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a population record from the database by its ID
exports.getPopulationById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone('SELECT * FROM "population" WHERE "id" = $1', [id]);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Population record not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a population record in the database
exports.updatePopulation = async (req, res) => {
  try {
    const { id, commune_id, iris_id, year, population_count, building_id } = req.body;
    const result = await db.result(
      `UPDATE "population"
       SET "commune_id" = $2, "iris_id" = $3, "year" = $4, "population_count" = $5, "building_id" = $6
       WHERE "id" = $1`,
      [id, commune_id, iris_id, year, population_count, building_id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Population record updated successfully." });
    } else {
      res.status(404).json({ error: "Population record not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a population record from the database by its ID
exports.deletePopulation = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.result(
      'DELETE FROM "population" WHERE "id" = $1',
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Population record deleted successfully." });
    } else {
      res.status(404).json({ error: "Population record not found." });
    }
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
};
