const express = require('express');
const router = express.Router();

// Import controller
const transportationRoutesController = require('../controllers/transportationRoutesController');
const collectionPointsController = require('../controllers/collectionPointsController');
const treatmentSiteController = require('../controllers/treatmentSiteController');
const transportationVehiclesController = require('../controllers/transportationVehiclesController');


// Router
router.get('/', async (req, res) => {
  try {
    const routes = await transportationRoutesController.getAllTransportationRoutes(req, res);
    const collectionPoints = await collectionPointsController.getAllWasteCollectionPoint(req, res);
    const treatmentSites = await treatmentSiteController.getAllTreatmentSites(req, res);
    const vehicles = await transportationVehiclesController.getAllTransportationVehicles(req, res);
    res.render('transportation_routes', { routes, collectionPoints, treatmentSites, vehicles });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});







/**
 * ************************** BEGINNING OF ROUTES FOR TRANSPORTATION ROUTES **************************
 */

/**
 * @swagger
 * /api/routes:
 *   post:
 *     summary: Create a new transportation route
 *     tags: [Transportation Routes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TransportationRoute'
 *     responses:
 *       201:
 *         description: Transportation route created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransportationRoute'
 */
router.post('/', transportationRoutesController.createTransportationRoute);

/**
 * @swagger
 * /api/routes:
 *   get:
 *     summary: Retrieve a list of transportation routes
 *     tags: [Transportation Routes]
 *     responses:
 *       200:
 *         description: A list of transportation routes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TransportationRoute'
 */
router.get('/', transportationRoutesController.getAllTransportationRoutes);

/**
 * @swagger
 * /api/routes/{id}:
 *   get:
 *     summary: Retrieve a transportation route by ID
 *     tags: [Transportation Routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the transportation route
 *     responses:
 *       200:
 *         description: Transportation route retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransportationRoute'
 */
router.get('/:id', transportationRoutesController.getTransportationRouteById);

/**
 * @swagger
 * /api/routes/{id}:
 *   put:
 *     summary: Update a transportation route by ID
 *     tags: [Transportation Routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The transportation route ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TransportationRoute'
 *     responses:
 *       200:
 *         description: The updated transportation route
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransportationRoute'
 *       404:
 *         description: Transportation route not found
 */
router.put('/:id', transportationRoutesController.updateTransportationRoute);

/**
 * @swagger
 * /api/routes/{id}:
 *   delete:
 *     summary: Delete a transportation route by ID
 *     tags: [Transportation Routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The transportation route ID
 *     responses:
 *       200:
 *         description: Transportation route deleted
 *       404:
 *         description: Transportation route not found
*/
router.delete('/:id', transportationRoutesController.deleteTransportationRoute);

/**

    ************************** END OF ROUTES FOR TRANSPORTATION ROUTES **************************
*/

module.exports = router;
