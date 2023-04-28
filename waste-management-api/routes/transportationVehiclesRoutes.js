// const express = require('express');
// const router = express.Router();

// // Import controller
// const transportationVehiclesController = require('../controllers/transportationVehiclesController');

// /**
//  * ************************** BEGINNING OF ROUTES FOR TRANSPORTATION VEHICLES **************************
//  */

// /**
//  * @swagger
//  * /transportation-vehicles:
//  *   post:
//  *     summary: Create a new transportation vehicle
//  *     tags: [Transportation Vehicles]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/TransportationVehicle'
//  *     responses:
//  *       201:
//  *         description: Transportation vehicle created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TransportationVehicle'
//  */
// router.post('/transportation-vehicles', transportationVehiclesController.createTransportationVehicle);

// /**
//  * @swagger
//  * /transportation-vehicles:
//  *   get:
//  *     summary: Retrieve a list of transportation vehicles
//  *     tags: [Transportation Vehicles]
//  *     responses:
//  *       200:
//  *         description: A list of transportation vehicles
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/TransportationVehicle'
//  */
// router.get('/transportation-vehicles', transportationVehiclesController.getAllTransportationVehicles);

// /**
//  * @swagger
//  * /transportation-vehicles/{id}:
//  *   get:
//  *     summary: Retrieve a transportation vehicle by ID
//  *     tags: [Transportation Vehicles]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: ID of the transportation vehicle
//  *     responses:
//  *       200:
//  *         description: Transportation vehicle retrieved successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TransportationVehicle'
//  */
// router.get('/transportation-vehicles/:id', transportationVehiclesController.getTransportationVehicleById);

// /**
//  * @swagger
//  * /transportation-vehicles/{id}:
//  *   put:
//  *     summary: Update a transportation vehicle by ID
//  *     tags: [Transportation Vehicles]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The transportation vehicle ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/TransportationVehicle'
//  *     responses:
//  *       200:
//  *         description: The updated transportation vehicle
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TransportationVehicle'
//  *       404:
//  *         description: Transportation vehicle not found
//  */
// router.put('/transportation-vehicles/:id', transportationVehiclesController.updateTransportationVehicle);

// /**
//  * @swagger
//  * /transportation-vehicles/{id}:
//  *   delete:
//  *     summary: Delete a transportation vehicle by ID
//  *     tags: [Transportation Vehicles]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The transportation vehicle ID
//  *     responses:
//  *       200:
//  *         description: Transportation vehicle deleted
//  *       404:
//  *         description: Transportation vehicle not found
//  */
// router.delete('/transportation-vehicles/:id', transportationVehiclesController.deleteTransportationVehicle);

// /**
//  * ************************** END OF ROUTES FOR TRANSPORTATION VEHICLES **************************
//  */

// module.exports = router;
