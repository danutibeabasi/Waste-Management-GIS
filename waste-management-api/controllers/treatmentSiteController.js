const db = require('../db.js');

// Get all treatment sites
exports.getAllTreatmentSites = async (req, res) => {
  try {
    const result = await db.manyOrNone('SELECT * FROM "treatment_sites"');
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get a treatment site by ID
exports.getTreatmentSiteById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone('SELECT * FROM "treatment_sites" WHERE "id" = $1', [id]);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Treatment site not found.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Create a new treatment site
exports.createTreatmentSite = async (req, res) => {
  try {
    const { code, name, address_1, address_2, postal_code, city_id, latitude, longitude, service_status, opening_date, closing_date, service_type_description, data_source_id } = req.body;
    const result = await db.one(
      `INSERT INTO "treatment_sites" ("code", "name", "address_1", "address_2", "postal_code", "city_id", "latitude", "longitude", "service_status", "opening_date", "closing_date", "service_type_description", "geom", "data_source_id")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, ST_SetSRID(ST_MakePoint($8, $7), 4326), $13) RETURNING *`,
      [code, name, address_1, address_2, postal_code, city_id, latitude, longitude, service_status, opening_date, closing_date, service_type_description, data_source_id]
    );
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Update a treatment site by ID
exports.updateTreatmentSite = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, name, address_1, address_2, postal_code, city_id, latitude, longitude, service_status, opening_date, closing_date, service_type_description, data_source_id } = req.body;
    const result = await db.result(
      `UPDATE "treatment_sites"
       SET "code" = $1, "name" = $2, "address_1" = $3, "address_2" = $4, "postal_code" = $5, "city_id" = $6, "latitude" = $7, "longitude" = $8, "service_status" = $9, "opening_date" = $10, "closing_date" = $11, "service_type_description" = $12, "geom" = ST_SetSRID(ST_MakePoint($8, $7), 4326), "data_source_id" = $13
       WHERE "id" = $14`,
      [code, name, address_1, address_2, postal_code, city_id, latitude, longitude, service_status, opening_date, closing_date, service_type_description, data_source_id, id]
    );
    if (result.rowCount === 1) {
      res.status(200).json({ message: 'Treatment site updated successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment site not found.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Delete a treatment site by ID
exports.deleteTreatmentSite = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.result('DELETE FROM "treatment_sites" WHERE "id" = $1', [id]);
    if (result.rowCount === 1) {
      res.status(200).json({ message: 'Treatment site deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment site not found.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
