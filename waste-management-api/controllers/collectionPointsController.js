

// Import the database connection
const db = require('../db.js');

// Create a new waste collection point in the database
exports.createWasteCollectionPoint = async (req, res) => {
  try {
      const { name, address_1, address_2, postal_code, city, phone, email, latitude, longitude, code } = req.body;
      const result = await db.oneOrNone(
          `INSERT INTO "collection_points" ("name", "address_1", "address_2", "postal_code", "city", "phone", "email", "latitude", "longitude", "code", geom)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, ST_SetSRID(ST_MakePoint($9, $8), 4326)) RETURNING *`,
          [name, address_1, address_2, postal_code, city, phone, email, latitude, longitude, code]
      );

      if (result) {
        console.log(result);
        res.status(201).json(result);
      } else {
        res.status(500).json({ error: "Error inserting new waste collection point." });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};




exports.getAllWasteCollectionPoint = async (req, res) => {
  try {
    const result = await db.manyOrNone(
      'SELECT id, "name", "address_1", "address_2", "postal_code", "city", "phone", "email", "latitude", "longitude", "code", total_weight, average_weight, min_weight, max_weight, total_bins, average_bins, number_of_passages, ST_AsGeoJSON(geom) as geom FROM "collection_points"'
    );
    // Convert the result to GeoJSON format
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
          city: row.city,
          phone: row.phone,
          email: row.email,
          latitude: row.latitude,
          longitude: row.longitude,
          code: row.code,
          total_weight: row.total_weight,
          average_weight: row.average_weight,
          min_weight: row.min_weight,
          max_weight: row.max_weight,
          total_bins: row.total_bins,
          average_bins: row.average_bins,
          number_of_passages: row.number_of_passages,
        },
        geometry: JSON.parse(row.geom),
      })),
    };
    res.status(200).json(geojson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



//get waste collection point by id
exports.getWasteCollectionPointById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await db.oneOrNone(
        'SELECT id, "name", "address_1", "address_2", "postal_code", "city", "phone", "email", "latitude", "longitude", "code", ST_AsGeoJSON(geom) as geom FROM "collection_points" WHERE id = $1',
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
  
  //get all waste collection point by postal code
  exports.getWasteCollectionPointByPostalCode = async (req, res) => {
    try {
      const { postal_code } = req.params;
      const result = await db.manyOrNone(
        'SELECT id, "name", "address_1", "address_2", "postal_code", "city", "phone", "email", "latitude", "longitude", "code", ST_AsGeoJSON(geom) as geom FROM "collection_points" WHERE "postal_code" = $1',
        [postal_code]
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

// get all waste collection point by city
exports.getWasteCollectionPointByCity = async (req, res) => {
  try {
    const { city } = req.params;
    const lowercaseCity = city.toLowerCase();
    const result = await db.manyOrNone(
      'SELECT id, "name", "address_1", "address_2", "postal_code", "city", "phone", "email", "latitude", "longitude", "code", ST_AsGeoJSON(geom) as geom FROM "collection_points" WHERE LOWER("city") = $1',
      [lowercaseCity]
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


// get all waste collection point by code

exports.getWasteCollectionPointByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const lowercaseCode = code.toLowerCase();
    const result = await db.manyOrNone(
      'SELECT id, "name", "address_1", "address_2", "postal_code", "city", "phone", "email", "latitude", "longitude", "code", ST_AsGeoJSON(geom) as geom FROM "collection_points" WHERE LOWER("code") = $1',
      [lowercaseCode]
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
    const { id, name, address_1, address_2, postal_code, city, phone, email, latitude, longitude, code } = req.body;

    const result = await db.result(
      `UPDATE "collection_points"
       SET "name" = $2, "address_1" = $3, "address_2" = $4, "postal_code" = $5, "city" = $6, "phone" = $7, "email" = $8, "latitude" = $9, "longitude" = $10, "code" = $11, geom = ST_SetSRID(ST_MakePoint($10, $9), 4326)
       WHERE "id" = $1`,
      [id, name, address_1, address_2, postal_code, city, phone, email, latitude, longitude, code]
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

