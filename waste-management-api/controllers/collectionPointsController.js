

// Import the database connection
const db = require('/home/dan/wastemanagement-project/waste-management-api/db.js');

// // Waste Collection Points CRUD operations
// exports.createWasteCollectionPoint = async (req, res) => {
//     // Your implementation for creating a new waste collection point
//     try {
//         const { nom, address1, address2, code_postal, ville, tel1, mail, latitude, longitude, poids_total, poids_moyen, min, max, nombre_de_bacs_totals, nombre_de_bacs_moyens, nombre_de_passage } = req.body;
//         const result = await db.query(
//             `INSERT INTO "Points de collecte_CSV" ("nom", "address 1", "address 2", "code postal", "ville", "tel 1", "Mail", "latitude", "longitude", "Poids total", "Poids moyen", min, max, "Nombre de bacs totals", "Nombre de bacs moyens", "Nombre de passage", geom)
//              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, ST_SetSRID(ST_MakePoint($9, $8), 4326)) RETURNING *`,
//             [nom, address1, address2, code_postal, ville, tel1, mail, latitude, longitude, poids_total, poids_moyen, min, max, nombre_de_bacs_totals, nombre_de_bacs_moyens, nombre_de_passage]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

exports.getAllWasteCollectionPoint = async (req, res) => {
    // Your implementation for getting all waste collection points
    try {
        const result = await db.query('SELECT pk, "Nom", "Adresse 1", "Adresse 2", "Code postal", "Ville", "Tel 1", "Mail", "Latitude", "Longitude", ST_AsGeoJSON(geom) as geom FROM "Points de collecte_CSV"');
        console.log(result);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getWasteCollectionPointById = async (req, res) => {
    // Your implementation for getting a waste collection point by ID
    try {
        const { id } = req.params;
        const result = await db.query('SELECT pk, "Nom", "Adresse 1", "Adresse 2", "Code postal", "Ville", "Tel 1", "Mail", "Latitude", "Longitude", ST_AsGeoJSON(geom) as geom FROM "Points de collecte_CSV" WHERE pk = $1', [id]);
        
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ error: "Waste collection point not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// exports.updateWasteCollectionPoint = async (req, res) => {
//     // Your implementation for updating a waste collection point
//     try {
//         const { id } = req.params;
//         const { nom, address1, address2, code_postal, ville, tel1, mail, latitude, longitude, poids_total, poids_moyen, min, max, nombre_de_bacs_totals, nombre_de_bacs_moyens, nombre_de_passage } = req.body;
//         const result = await db.query(
//             `UPDATE "Points de collecte_CSV" SET "nom" = $1, "address 1" = $2, "address 2" = $3, "code postal" = $4, ville = $5, "tel 1" = $6, "Mail" = $7, latitude = $8, longitude = $9, "Poids total" = $10, "Poids moyen" = $11, min = $12, max = $13, "Nombre de bacs totals" = $14, "Nombre de bacs moyens" = $15, "Nombre de passage" = $16, geom = ST_SetSRID(ST_MakePoint($9, $8), 4326)
//             WHERE id = $17 RETURNING *`,
//            ["nom", address1, address2, code_postal, ville, tel1, mail, latitude, longitude, poids_total, poids_moyen, min, max, nombre_de_bacs_totals, nombre_de_bacs_moyens, nombre_de_passage, id]
//        );
//        res.status(200).json(result.rows[0]);
//    } catch (err) {
//        res.status(500).json({ error: err.message });
//    }
// };

// exports.deleteWasteCollectionPoint = async (req, res) => {
//    // Your implementation for deleting a waste collection point
//    try {
//        const { id } = req.params;
//        const result = await db.query('DELETE FROM "Points de collecte_CSV" WHERE id = $1 RETURNING *', [id]);
//        res.status(200).json(result.rows[0]);
//    } catch (err) {
//        res.status(500).json({ error: err.message });
//    }
// };
