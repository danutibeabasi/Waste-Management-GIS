// Import the database connection
const db = require('/home/dan/wastemanagement-project/waste-management-api/db.js');
const math = require('mathjs');







// Create a new city in the database
exports.createCity = async (req, res) => {
  try {
    const {
      insee_code, city_codeid, name, status, population, geom, data_source_id
    } = req.body;

    const result = await db.oneOrNone(
      `INSERT INTO "city" ("insee_code", "city_codeid", "name", "status", "population", "geom", "data_source_id")
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [insee_code, city_codeid, name, status, population, geom, data_source_id]
    );

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Error inserting new city." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Get all cities from the database
exports.getAllCities = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT * FROM "city"'
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a city by ID
exports.getCityById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.oneOrNone(
      'SELECT * FROM "city" WHERE "id" = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "City not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing city in the database
exports.updateCity = async (req, res) => {
  try {
    const {
      id, insee_code, city_codeid, name, status, population, geom, data_source_id
    } = req.body;

    const result = await db.result(
      `UPDATE "city"
       SET "insee_code" = $2, "city_codeid" = $3, "name" = $4, "status" = $5, "population" = $6, "geom" = $7, "data_source_id" = $8
       WHERE "id" = $1`,
      [id, insee_code, city_codeid, name, status, population, geom, data_source_id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "City updated successfully." });
    } else {
      res.status(404).json({ error: "City not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a city from the database
exports.deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.result(
      `DELETE FROM "city" WHERE "id" = $1`,
      [id]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "City deleted successfully." });
    } else {
      res.status(404).json({ error: "City not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// get waste  collection efficiency for all cities
exports.getWasteCollectionEfficiency = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      `SELECT 
        c.id,
        (SUM(wrs.total_collections_so_far) / COUNT(distinct wr.collection_point_id)) AS collection_efficiency
       FROM 
        city c
       JOIN 
        collection_points cp ON c.id = cp.city_id
       JOIN
        waste_records wr ON cp.id = wr.collection_point_id
       JOIN
        waste_records_statistics wrs ON wrs.collection_point_id = wr.collection_point_id
       GROUP BY
        c.id`
    );
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No data found for the cities." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get waste variability for all cities
exports.getWasteVariability = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      `SELECT 
        c.id,
        STDDEV_POP(wrs.total_weight_collected) AS waste_variability
       FROM 
        city c
       JOIN 
        collection_points cp ON c.id = cp.city_id
       JOIN
        waste_records wr ON cp.id = wr.collection_point_id
       JOIN
        waste_records_statistics wrs ON wrs.collection_point_id = wr.collection_point_id
       GROUP BY
        c.id`
    );
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No data found for the cities." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get city statistics
exports.getCityStatistics = async (req, res) => {
  try {
    const { city_id } = req.params;

    const result = await db.oneOrNone(
      `SELECT
         cp.city_id,
         COUNT(DISTINCT wr.collection_point_id) AS total_collection_points,
         SUM(wr.total_weight_per_collection) AS total_weight_per_city,
         AVG(wr.total_weight_per_collection) AS average_weight_per_city,
         SUM(wr.number_of_bins_per_collection) AS total_bins_per_city,
         MIN(wr.total_weight_per_collection) AS min_weight_per_city,
         MAX(wr.total_weight_per_collection) AS max_weight_per_city
       FROM
         waste_records wr
       JOIN
         collection_points cp ON wr.collection_point_id = cp.id
       WHERE
         cp.city_id = $1
       GROUP BY
         cp.city_id`,
      [city_id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No waste record found for this city." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get city statistics by year
exports.getCityStatisticsForYear = async (req, res) => {
  try {
    const { city_id, year } = req.params;

    const result = await db.oneOrNone(
      `SELECT
         cp.city_id,
         COUNT(DISTINCT wr.collection_point_id) AS total_collection_points,
         SUM(wr.total_weight_per_collection) AS total_weight_per_city,
         AVG(wr.total_weight_per_collection) AS average_weight_per_city,
         SUM(wr.number_of_bins_per_collection) AS total_bins_per_city,
         MIN(wr.total_weight_per_collection) AS min_weight_per_city,
         MAX(wr.total_weight_per_collection) AS max_weight_per_city
       FROM
         waste_records wr
       JOIN
         collection_points cp ON wr.collection_point_id = cp.id
       WHERE
         cp.city_id = $1 AND
         EXTRACT(YEAR FROM wr.timestamp) = $2
       GROUP BY
         cp.city_id`,
      [city_id, year]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No waste record found for this city and year." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get city statistics by month
exports.getCityStatisticsForMonth = async (req, res) => {
  try {
    const { city_id, year, month } = req.params;

    const result = await db.oneOrNone(
      `SELECT
         cp.city_id,
         COUNT(DISTINCT wr.collection_point_id) AS total_collection_points,
         SUM(wr.total_weight_per_collection) AS total_weight_per_city,
         AVG(wr.total_weight_per_collection) AS average_weight_per_city,
         SUM(wr.number_of_bins_per_collection) AS total_bins_per_city,
         MIN(wr.total_weight_per_collection) AS min_weight_per_city,
         MAX(wr.total_weight_per_collection) AS max_weight_per_city
       FROM
         waste_records wr
       JOIN
         collection_points cp ON wr.collection_point_id = cp.id
       WHERE
         cp.city_id = $1 AND
         EXTRACT(YEAR FROM wr.timestamp) = $2 AND
         EXTRACT(MONTH FROM wr.timestamp) = $3
       GROUP BY
         cp.city_id`,
      [city_id, year, month]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No waste record found for this city in the specified month and year." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// get total waste for all cities
exports.getTotalWasteForAllCities = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      `SELECT
         cp.city_id,
         SUM(wr.total_weight_per_collection) AS total_weight_per_city
       FROM
         waste_records wr
       JOIN
         collection_points cp ON wr.collection_point_id = cp.id
       GROUP BY
         cp.city_id`
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No waste record found for any city." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get average waste per capita for all cities
exports.getAvgWastePerCapitaAllCities = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      `SELECT 
        c.id, 
        c.name, 
        SUM(cs.total_weight_per_city) / c.population AS average_waste_per_capita
       FROM 
        city_statistics cs 
       JOIN 
        city c ON cs.city_id = c.id
       GROUP BY
        c.id, c.name, c.population`
    );
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No data found for the cities." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// get waste type statistics for all  cities
exports.getWasteTypeStatisticsForAllCities = async (req, res) => {
  try {
    const { waste_type_id } = req.params;

    const result = await db.manyOrNone(
      `SELECT
         cp.city_id,
         SUM(wr.total_weight_per_collection) AS total_weight_per_city,
         AVG(wr.total_weight_per_collection) AS average_weight_per_city,
         SUM(wr.number_of_bins_per_collection) AS total_bins_per_city
       FROM
         waste_records wr
       JOIN
         collection_points cp ON wr.collection_point_id = cp.id
       WHERE
         wr.waste_types_id = $1
       GROUP BY
         cp.city_id`,
      [waste_type_id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No waste record found for this waste type in any city." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getAvgWastePerCapita = async (req, res) => {
  try {
    const { city_id } = req.params;
    const result = await db.oneOrNone(
      `SELECT 
        cs.total_weight_per_city / c.population AS average_waste_per_capita
       FROM 
        city_statistics cs 
       JOIN 
        city c ON cs.city_id = c.id 
       WHERE 
        cs.city_id = $1`,
      [city_id]
    );
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No data found for this city." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCollectionPointsPerCapita = async (req, res) => {
  try {
    const { city_id } = req.params;
    const result = await db.oneOrNone(
      `SELECT 
        ROUND(CAST(cs.total_collection_point AS DECIMAL) / c.population, 4) AS collection_points_per_capita
       FROM 
        city_statistics cs 
       JOIN 
        city c ON cs.city_id = c.id 
       WHERE 
        cs.city_id = $1`,
      [city_id]
    );
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No data found for this city." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNumCollectionPointsPerCapita = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      `SELECT 
        c.id, 
        c.name, 
        CAST(cs.total_collection_point AS FLOAT) / c.population AS collection_points_per_capita
       FROM 
        city_statistics cs 
       JOIN 
        city c ON cs.city_id = c.id
       GROUP BY
        c.id, c.name, c.population, cs.total_collection_point`
    );
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No data found for the cities." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getTotalWastePerCityRealtime = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      `SELECT 
        c.id, 
        c.name, 
        SUM(wr.total_weight_per_collection) AS total_waste_generated
       FROM 
        city c
       JOIN 
        collection_points cp ON c.id = cp.city_id
       JOIN
        waste_records wr ON cp.id = wr.collection_point_id
       GROUP BY
        c.id, c.name`
    );

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "No data found for the cities." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





