// Import the database connection
const db = require('/home/dan/wastemanagement-project/waste-management-api/db.js');

// Create a new commune in the database
exports.createCommune = async (req, res) => {
  try {
    const {
      commune_codeid, name, insee_code, statut, population,
      insee_can, insee_arr, insee_dep, insee_reg, insee_epci,
      total_weight, sum_average_weight, min_weight, max_weight,
      total_bins, sum_average_bins, geom
    } = req.body;

    const result = await db.oneOrNone(
      `INSERT INTO "communes" ("commune_codeid", "name", "insee_code", "statut", "population", "insee_can", "insee_arr", "insee_dep", "insee_reg", "insee_epci", "total_weight", "sum_average_weight", "min_weight", "max_weight", "total_bins", "sum_average_bins", "geom")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *`,
      [commune_codeid, name, insee_code, statut, population, insee_can, insee_arr, insee_dep, insee_reg, insee_epci, total_weight, sum_average_weight, min_weight, max_weight, total_bins, sum_average_bins, geom]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new commune." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all communes from the database
exports.getAllCommunes = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT "id", "commune_codeid", "name", "insee_code", "statut", "population", "insee_can", "insee_arr", "insee_dep", "insee_reg", "insee_epci", "total_weight", "sum_average_weight", "min_weight", "max_weight", "total_bins", "sum_average_bins", "geom" FROM "communes"'
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a commune by ID
exports.getCommuneById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.oneOrNone(
      'SELECT "id", "commune_codeid", "name", "insee_code", "statut", "population", "insee_can", "insee_arr", "insee_dep", "insee_reg", "insee_epci", "total_weight", "sum_average_weight", "min_weight", "max_weight", "total_bins", "sum_average_bins", "geom" FROM "communes" WHERE "id" = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Commune not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    }
};

// Update an existing commune in the database
exports.updateCommune = async (req, res) => {
  try {
    const {
      id, commune_codeid, name, insee_code, statut, population,
      insee_can, insee_arr, insee_dep, insee_reg, insee_epci,
      total_weight, sum_average_weight, min_weight, max_weight,
      total_bins, sum_average_bins, geom
    } = req.body;

    const result = await db.result(
      `UPDATE "communes"
       SET "commune_codeid" = $2, "name" = $3, "insee_code" = $4, "statut" = $5, "population" = $6, "insee_can" = $7, "insee_arr" = $8, "insee_dep" = $9, "insee_reg" = $10, "insee_epci" = $11, "total_weight" = $12, "sum_average_weight" = $13, "min_weight" = $14, "max_weight" = $15, "total_bins" = $16, "sum_average_bins" = $17, "geom" = $18
       WHERE "id" = $1`,
      [id, commune_codeid, name, insee_code, statut, population, insee_can, insee_arr, insee_dep, insee_reg, insee_epci, total_weight, sum_average_weight, min_weight, max_weight, total_bins, sum_average_bins, geom]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Commune updated successfully." });
    } else {
      res.status(404).json({ error: "Commune not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a commune from the database
exports.deleteCommune = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.result(
      `DELETE FROM "communes" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Commune deleted successfully." });
    } else {
      res.status(404).json({ error: "Commune not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


