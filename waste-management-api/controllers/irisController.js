// Import the database connection
const db = require('/home/dan/wastemanagement-project/waste-management-api/db.js');

// Create a new iris in the database
exports.createIris = async (req, res) => {
  try {
    const {
      iris_code, insee_code, city_id, iris_name, iris_type, geom, data_source_id
    } = req.body;

    const result = await db.oneOrNone(
      `INSERT INTO "iris" ("iris_code", "insee_code", "city_id", "iris_name", "iris_type", "geom", "data_source_id")
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [iris_code, insee_code, city_id, iris_name, iris_type, geom, data_source_id]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new iris." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all iris records from the database
exports.getAllIris = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT * FROM "iris"'
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get an iris by ID
exports.getIrisById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.oneOrNone(
      'SELECT * FROM "iris" WHERE "id" = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Iris not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing iris in the database
exports.updateIris = async (req, res) => {
  try {
    const {
      id, iris_code, insee_code, city_id, iris_name, iris_type, geom, data_source_id
    } = req.body;

    const result = await db.result(
      `UPDATE "iris"
       SET "iris_code" = $2, "insee_code" = $3, "city_id" = $4, "iris_name" = $5, "iris_type" = $6, "geom" = $7, "data_source_id" = $8
       WHERE "id" = $1`,
      [id, iris_code, insee_code, city_id, iris_name, iris_type, geom, data_source_id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Iris updated successfully." });
    } else {
      res.status(404).json({ error: "Iris not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an iris from the database
exports.deleteIris = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.result(
      `DELETE FROM "iris" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Iris deleted successfully." });
    } else {
      res.status(404).json({ error: "Iris not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllIrisStatistics = async (req, res) => {
  try {
    // Fetch all statistics from iris_statistics
    const result = await db.any(
      `
      SELECT 
        iris_id,
        total_weight_per_iris,
        total_collection_point,
        average_weight_per_iris,
        total_bins_per_iris,
        min_weight_per_iris,
        max_weight_per_iris
      FROM 
        iris_statistics
      `
    );

    // Check if data exists
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No iris statistics found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Statistics for iris records by iris id
exports.getIrisStatisticsById = async (req, res) => {
  try {
    const { iris_id } = req.params;

    // Fetch statistics from iris_statistics
    const result = await db.oneOrNone(
      `
      SELECT 
        iris_id,
        total_weight_per_iris,
        total_collection_point,
        average_weight_per_iris,
        total_bins_per_iris,
        min_weight_per_iris,
        max_weight_per_iris
      FROM 
        iris_statistics
      WHERE
        iris_id = $1
      `,
      [iris_id]
    );

    // Check if data exists
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No iris statistics found for this iris id." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getIrisStatisticsByMaxWeight = async (req, res) => {
  try {
    // Fetch iris statistics by maximum weight from iris_statistics
    const result = await db.any(
      `
      SELECT 
        iris_id,
        total_weight_per_iris,
        total_collection_point,
        average_weight_per_iris,
        total_bins_per_iris,
        min_weight_per_iris,
        max_weight_per_iris
      FROM 
        iris_statistics
      ORDER BY
        max_weight_per_iris DESC
      LIMIT 1
      `
    );

    // Check if data exists
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No iris statistics found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getIrisStatisticsByMinWeight = async (req, res) => {
  try {
    // Fetch iris statistics by minimum weight from iris_statistics
    const result = await db.any(
      `
      SELECT 
        iris_id,
        total_weight_per_iris,
        total_collection_point,
        average_weight_per_iris,
        total_bins_per_iris,
        min_weight_per_iris,
        max_weight_per_iris
      FROM 
        iris_statistics
      ORDER BY
        min_weight_per_iris ASC
      LIMIT 1
      `
    );

    // Check if data exists
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No iris statistics found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

