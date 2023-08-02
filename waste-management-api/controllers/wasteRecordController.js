// Import the database connection
const db = require('../db.js');

// Create a new waste record in the database
exports.createWasteRecord = async (req, res) => {
  try {
    const { collection_point_id, timestamp, total_weight_per_collection, number_of_bins_per_collection, waste_types_id, data_source_id } = req.body;
    const result = await db.oneOrNone(
      `INSERT INTO "waste_records" ("collection_point_id", "timestamp", "total_weight_per_collection", "number_of_bins_per_collection", "waste_types_id", "data_source_id")
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [collection_point_id, timestamp, total_weight_per_collection, number_of_bins_per_collection, waste_types_id, data_source_id]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new waste record." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllWasteRecords = async (req, res) => {
  try {
    const result = await db.manyOrNone('SELECT * FROM "waste_records"');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a waste record by its ID
exports.getWasteRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone('SELECT * FROM "waste_records" WHERE "id" = $1', [id]);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Waste record not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing waste record in the database
exports.updateWasteRecord = async (req, res) => {
  try {
    const { collection_point_id, timestamp, total_weight_per_collection, number_of_bins_per_collection, waste_types_id, data_source_id } = req.body;
    const { id } = req.params;
    
    const result = await db.result(
      `UPDATE "waste_records"
       SET "collection_point_id" = $1, "timestamp" = $2, "total_weight_per_collection" = $3, "number_of_bins_per_collection" = $4, "waste_types_id" = $5, "data_source_id" = $6
       WHERE "id" = $7`,
      [collection_point_id, timestamp, total_weight_per_collection, number_of_bins_per_collection, waste_types_id, data_source_id, id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Waste record updated successfully." });
    } else {
      res.status(404).json({ error: "Waste record not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a waste record from the database by its ID
exports.deleteWasteRecord = async (req, res) => {
try {
    const { id } = req.params;
    const result = await db.result('DELETE FROM "waste_records" WHERE "id" = $1', [id]);

    if (result.rowCount === 1) {
        res.status(200).json({ message: "Waste record deleted successfully." });
    } else {
        res.status(404).json({ error: "Waste record not found." });
    }
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

// Statistics for waste records
exports.getWasteRecordStatisticsByCollectionPoint = async (req, res) => {
  try {
    const { collection_point_id } = req.params;

    // Use aggregate functions to calculate statistics
    const result = await db.one(
      `
      SELECT 
        waste_types_id,
        COUNT(*) AS total_collections_so_far,
        SUM(total_weight_per_collection) AS total_weight_collected,
        AVG(total_weight_per_collection) AS average_weight_collected,
        MAX(total_weight_per_collection) AS max_weight_collected,
        MIN(total_weight_per_collection) AS min_weight_collected,
        SUM(number_of_bins_per_collection) AS total_bins_collected,
        AVG(number_of_bins_per_collection) AS average_bins_collected,
        COUNT(*) / (EXTRACT(DAYS FROM (NOW() - MIN(timestamp)))) AS collection_frequency
      FROM 
        "waste_records"
      WHERE
        "collection_point_id" = $1
      GROUP BY
        waste_types_id
      `,
      [collection_point_id]
    );

    // Check if data exists
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No waste records found for this collection point." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Statistics for waste records
exports.getWasteRecordStatistics = async (req, res) => {
  try {
    // Use aggregate functions to calculate statistics
    const result = await db.one(
      `
      SELECT 
        COUNT(*) AS total_collections_so_far,
        SUM(total_weight_per_collection) AS total_weight_collected,
        AVG(total_weight_per_collection) AS average_weight_collected,
        MAX(total_weight_per_collection) AS max_weight_collected,
        MIN(total_weight_per_collection) AS min_weight_collected,
        SUM(number_of_bins_per_collection) AS total_bins_collected,
        AVG(number_of_bins_per_collection) AS average_bins_collected,
        COUNT(*) / (EXTRACT(DAYS FROM (NOW() - MIN(timestamp)))) AS collection_frequency
      FROM 
        "waste_records"
      `
    );

    // Check if data exists
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No waste records found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
