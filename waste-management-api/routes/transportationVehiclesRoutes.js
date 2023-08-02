const express = require('express');
const router = express.Router();

// Import controller
const wasteContainerController = require('../controllers/wasteContainerController');
const transportationVehiclesController = require('../controllers/transportationVehiclesController');
const transportationTechnologyController = require('../controllers/transportationTechnologyController');


router.get('/', async (req, res) => {
  try {
    const containerList = await wasteContainerController.getAllWasteContainers(req, res);
    const techList = await transportationTechnologyController.getAllTransportationTechnology(req, res);
    const vehicleList = await transportationVehiclesController.getAllTransportationVehicles(req, res);

    res.render('transportation_vehicles', { 
      containerList, 
      techList, 
      vehicleList
    });
  } catch (err) {
    console.error(err);  // log error for debugging
    res.status(500).json({ error: err.message });
  }
});




/**
 * ************************** BEGINNING OF ROUTES FOR TRANSPORTATION VEHICLES **************************
 */

/**
 * @swagger
 * /api/transportationvehicles:
 *   post:
 *     summary: Create a new transportation vehicle
 *     tags: [Transportation Vehicles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TransportationVehicle'
 *     responses:
 *       201:
 *         description: Transportation vehicle created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransportationVehicle'
 */
router.post('/', transportationVehiclesController.createTransportationVehicle);

/**
 * @swagger
 * /api/transportationvehicles:
 *   get:
 *     summary: Retrieve a list of transportation vehicles
 *     tags: [Transportation Vehicles]
 *     responses:
 *       200:
 *         description: A list of transportation vehicles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TransportationVehicle'
 */
router.get('/', transportationVehiclesController.getAllTransportationVehicles);

/**
 * @swagger
 * /api/transportationvehicles/{id}:
 *   get:
 *     summary: Retrieve a transportation vehicle by ID
 *     tags: [Transportation Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the transportation vehicle
 *     responses:
 *       200:
 *         description: Transportation vehicle retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransportationVehicle'
 */
router.get('/:id', transportationVehiclesController.getTransportationVehicleById);

/**
 * @swagger
 * /api/transportationvehicles/{id}:
 *   put:
 *     summary: Update a transportation vehicle by ID
 *     tags: [Transportation Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The transportation vehicle ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TransportationVehicle'
 *     responses:
 *       200:
 *         description: The updated transportation vehicle
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransportationVehicle'
 *       404:
 *         description: Transportation vehicle not found
 */
router.put('/:id', transportationVehiclesController.updateTransportationVehicle);

/**
 * @swagger
 * /api/transportationvehicles/{id}:
 *   delete:
 *     summary: Delete a transportation vehicle by ID
 *     tags: [Transportation Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The transportation vehicle ID
 *     responses:
 *       200:
 *         description: Transportation vehicle deleted
 *       404:
 *         description: Transportation vehicle not found
 */
router.delete('/:id', transportationVehiclesController.deleteTransportationVehicle);

/**
 * ************************** END OF ROUTES FOR TRANSPORTATION VEHICLES **************************
 */

module.exports = router;
