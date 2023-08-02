

// Import the database connection
const db = require('../db.js');

// getAllWasteCollectionPoint rewritten to return different data based on a query parameter
exports.getAllWasteCollectionPoint = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      `SELECT cp.id, cp."name", cp."address_1", cp."address_2", cp."postal_code", 
        c."name" as city_name, i."iris_name" as iris_name, 
        cp."latitude", cp."longitude", cp."code", cp."average_weight", cp."data_source_id",
        ST_AsGeoJSON(cp.geom) as geom
      FROM "collection_points" cp
      LEFT JOIN "city" c ON cp."city_id" = c."id"
      LEFT JOIN "iris" i ON cp."id" = i."id"`
    );

    // If format=geojson return the data in GeoJSON format
    if (req.query.format === 'geojson') {
      const geojson = {
        type: "FeatureCollection",
        features: result.map((row) => ({
          type: "Feature",
          properties: {
            id: row.id,
            name: row.name,
            address_1: row.address_1,
            address_2: row.address_2,
            postal_code: row.postal_code,
            city_name: row.city_name,
            iris_name: row.iris_name,
            latitude: row.latitude,
            longitude: row.longitude,
            code: row.code,
            average_weight: row.average_weight,
            data_source_id: row.data_source_id,
          },
          geometry: JSON.parse(row.geom),
        })),
      };
      res.status(200).json(geojson);
    } 
    // Otherwise return the data as a simple array of objects
    else {
      const collectionPoints = result.map((row) => ({
        id: row.id,
        name: row.name,
        address_1: row.address_1,
        address_2: row.address_2,
        postal_code: row.postal_code,
        city_name: row.city_name,
        iris_name: row.iris_name,
        latitude: row.latitude,
        longitude: row.longitude,
        code: row.code,
        average_weight: row.average_weight,
        data_source_id: row.data_source_id,
      }));
      res.status(200).json(collectionPoints);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get waste collection point by id
exports.getWasteCollectionPointById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone(
      'SELECT * FROM "collection_points" WHERE id = $1',
      [id]
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Waste collection point not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all waste collection point by city id
exports.getWasteCollectionPointByCity = async (req, res) => {
try {
  const { city_id } = req.params;
  const result = await db.manyOrNone(
    'SELECT * FROM "collection_points" WHERE "city_id" = $1',
    [city_id]
  );
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ error: "Waste collection points not found for the provided city id." });
  }
} catch (err) {
  res.status(500).json({ error: err.message });
} 
};

// Get all waste collection points by postal code
exports.getWasteCollectionPointByPostalCode = async (req, res) => {
  try {
    const { postal_code } = req.params;
    const result = await db.manyOrNone(
      'SELECT * FROM "collection_points" WHERE "postal_code" = $1',
      [postal_code]
    );
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Waste collection points not found for the provided postal code." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Get all waste collection point by code
exports.getWasteCollectionPointByCode = async (req, res) => {
try {
  const { code } = req.params;
  const result = await db.manyOrNone(
    'SELECT * FROM "collection_points" WHERE "code" = $1',
    [code]
  );
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ error: "Waste collection point not found." });
  }
} catch (err) {
  res.status(500).json({ error: err.message });
}
};

// Update an existing waste collection point in the database
exports.updateWasteCollectionPoint = async (req, res) => {
try {
  const { id, name, address_1, address_2, postal_code, city_id, iris_id, latitude, longitude, average_weight, code, data_source_id } = req.body;

  const result = await db.result(
    `UPDATE "collection_points"
     SET "name" = $2, "address_1" = $3, "address_2" = $4, "postal_code" = $5, "city_id" = $6, "iris_id" = $7, "latitude" = $8, "longitude" = $9, "average_weight" = $10, "code" = $11, "data_source_id" = $12, geom = ST_SetSRID(ST_MakePoint($9, $8), 4326)
     WHERE "id" = $1`,
    [id, name, address_1, address_2, postal_code, city_id, iris_id, latitude, longitude, average_weight, code, data_source_id]
  );

  if (result.rowCount === 1) {
    res.status(200).json({ message: "Waste collection point updated successfully." });
  } else {
    res.status(404).json({ error: "Waste collection point not found." });
  }
} catch (err) {
  res.status(500).json({ error: err.message });
}
};


// Delete a waste collection point from the database
exports.deleteWasteCollectionPoint = async (req, res) => {
try {
  const { id } = req.params;

  const result = await db.result(
    `DELETE FROM "collection_points" WHERE "id" = $1`,
    [id]
  );

  if (result.rowCount === 1) {
    res.status(200).json({ message: "Waste collection point deleted successfully." });
  } else {
    res.status(404).json({ error: "Waste collection point not found." });
  }
} catch (err) {
  res.status(500).json({ error: err.message });
}
};
