const db = require('../db.js');

// Get all treatment sites
exports.getAllTreatmentSites = async (req, res) => {
  try {
    const results = await db.manyOrNone('SELECT * FROM treatment_sites');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a treatment site by ID
exports.getTreatmentSiteById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await db.oneOrNone('SELECT * FROM treatment_sites WHERE id = $1', [id]);
    if (results) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ error: 'Treatment site not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new treatment site
exports.createTreatmentSite = async (req, res) => {
  try {
    const { code, name, address_1, address_2, postal_code, city, phone, email, latitude, longitude } = req.body;
    const results = await db.one(
      'INSERT INTO treatment_sites (code, name, address_1, address_2, postal_code, city, phone, email, latitude, longitude, geom) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, ST_SetSRID(ST_MakePoint($10, $9), 4326)) RETURNING *', 
      [code, name, address_1, address_2, postal_code, city, phone, email, latitude, longitude]
    );
    res.redirect('/?layer=treatment_sites');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 


// Update a treatment site by ID
exports.updateTreatmentSite = async (req, res) => {
  try {
    const { id, code, name, address_1, address_2, postal_code, city, phone, email, latitude, longitude } = req.body;
    const results = await db.result('UPDATE treatment_sites SET code = $1, name = $2, address_1 = $3, address_2 = $4, postal_code = $5, city = $6, phone = $7, email = $8, latitude = $9, longitude = $10 WHERE id = $11', [code, name, address_1, address_2, postal_code, city, phone, email, latitude, longitude, id]);
    if (results.rowCount === 1) {
      res.status(200).json({ message: 'Treatment site updated successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment site not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a treatment site by ID
exports.deleteTreatmentSite = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await db.result('DELETE FROM treatment_sites WHERE id = $1', [id]);
    if (results.rowCount === 1) {
      res.status(200).json({ message: 'Treatment site deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Treatment site not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
