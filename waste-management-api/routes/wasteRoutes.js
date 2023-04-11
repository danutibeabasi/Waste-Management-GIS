const express = require('express');
const router = express.Router();

// Import controllers
const collectionPointsController = require('../controllers/collectionPointsController');
const transportationController = require('../controllers/transportationController');
const treatmentSitesController = require('../controllers/treatmentSitesController');


// Routes for waste collection points
/**
 * @swagger
 * /collectionpoint:
 *   get:
 *     summary: Retrieve a list of waste collection points
 *     tags: [Waste Collection Points]
 *     responses:
 *       200:
 *         description: A list of waste collection points
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.get('/collectionpoint', collectionPointsController.getAllWasteCollectionPoint);

/**
 * @swagger
 * /collectionpoint/{id}:
 *   get:
 *     summary: Retrieve a waste collection point by ID
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the waste collection point
 *     responses:
 *       200:
 *         description: Waste collection point retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteCollectionPoint'
 *       404:
 *         description: Waste collection point not found
 *       500:
 *         description: Some server error
 */
router.get('/collectionpoint/:id', collectionPointsController.getWasteCollectionPointById);


// /**
//  * @swagger
//  * /collectionpoint/{id}:
//  *   put:
//  *     summary: Update a waste collection point by ID
//  *     tags: [Waste Collection Points]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The waste collection point ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/WasteCollectionPoint'
//  *     responses:
//  *       200:
//  *         description: The updated waste collection point
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/WasteCollectionPoint'
//  *       404:
//  *         description: Waste collection point not found
//  */
// router.put('/collectionpoint/:id', collectionPointsController.updateWasteCollectionPoint);

// /**
//  * @swagger
//  * /collectionpoint/{id}:
//  *   delete:
//  *     summary: Delete a waste collection point by ID
//  *     tags: [Waste Collection Points]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The waste collection point ID
//  *     responses:
//  *       200:
//  *         description: Waste collection point deleted
//  *       404:
//  *         description: Waste collection point not found
//  */
// router.delete('/collectionpoint/:id', collectionPointsController.deleteWasteCollectionPoint);





// // Define routes for waste transportation technology
// router.post('/transportation', transportationController.createWasteTransportation);
// router.get('/transportation', transportationController.getAllWasteTransportation);
// router.get('/transportation/:id', transportationController.getWasteTransportationById);
// router.put('/transportation/:id', transportationController.updateWasteTransportation);
// router.delete('/transportation/:id', transportationController.deleteWasteTransportation);


// // Define routes for treatment sites
// router.post('/treatmentsite', treatmentSitesController.createTreatmentSite);
// router.get('/treatmentsite', treatmentSitesController.getAllTreatmentSites);
// router.get('/treatmentsite/:id', treatmentSitesController.getTreatmentSiteById);
// router.put('/treatmentsite/:id', treatmentSitesController.updateTreatmentSite);
// router.delete('/treatmentsite/:id', treatmentSitesController.deleteTreatmentSite);


// // Define routes for treatment sites technologies
// router.post('/treatmentsite/technology', treatmentSitesController.createTreatmentSiteTechnology);
// router.get('/treatmentsite/technology', treatmentSitesController.getAllTreatmentSiteTechnologies);
// router.get('/treatmentsite/technology/:id', treatmentSitesController.getTreatmentSiteTechnologyById);
// router.put('/treatmentsite/technology/:id', treatmentSitesController.updateTreatmentSiteTechnology);
// router.delete('/treatmentsite/technology/:id', treatmentSitesController.deleteTreatmentSiteTechnology);


module.exports = router;
