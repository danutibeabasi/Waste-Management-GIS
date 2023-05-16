const db = require('../db.js');

// Create a new building
exports.createBuilding = async (req, res) => {
  try {
    const { building_name, building_address, number_of_units, geom } = req.body;
    const result = await db.one(
      `INSERT INTO "buildings" ("building_name", "building_address", "number_of_units", "geom")
       VALUES ($1, $2, $3, ST_SetSRID(ST_GeomFromText($4), 4326)) RETURNING *`,
      [building_name, building_address, number_of_units, geom]
    );

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all buildings
exports.getAllBuildings = async (req, res) => {
  try {
    const result = await db.manyOrNone('SELECT * FROM "buildings"');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get building by id
exports.getBuildingById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.oneOrNone('SELECT * FROM "buildings" WHERE "id" = $1', [id]);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Building not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing building
exports.updateBuilding = async (req, res) => {
  try {
    const { id, building_name, building_address, number_of_units, geom } = req.body;

    const result = await db.result(
      `UPDATE "buildings"
       SET "building_name" = $2, "building_address" = $3, "number_of_units" = $4, "geom" = ST_SetSRID(ST_GeomFromText($5), 4326)
       WHERE "id" = $1`,
      [id, building_name, building_address, number_of_units, geom]
    );

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Building updated successfully." });
    } else {
      res.status(404).json({ error: "Building not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a building
exports.deleteBuilding = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.result('DELETE FROM "buildings" WHERE "id" = $1', [id]);

    if (result.rowCount === 1) {
      res.status(200).json({ message: "Building deleted successfully." });
    } else {
      res.status(404).json({ error: "Building not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
