// const express = require('express');
// const router = express.Router();

// // Import controller
// const transportationRoutesController = require('../controllers/transportationRoutesController');

// /**
//  * ************************** BEGINNING OF ROUTES FOR TRANSPORTATION ROUTES **************************
//  */

// /**
//  * @swagger
//  * /transportation-routes:
//  *   post:
//  *     summary: Create a new transportation route
//  *     tags: [Transportation Routes]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/TransportationRoute'
//  *     responses:
//  *       201:
//  *         description: Transportation route created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TransportationRoute'
//  */
// router.post('/transportation-routes', transportationRoutesController.createTransportationRoute);

// /**
//  * @swagger
//  * /transportation-routes:
//  *   get:
//  *     summary: Retrieve a list of transportation routes
//  *     tags: [Transportation Routes]
//  *     responses:
//  *       200:
//  *         description: A list of transportation routes
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/TransportationRoute'
//  */
// router.get('/transportation-routes', transportationRoutesController.getAllTransportationRoutes);

// /**
//  * @swagger
//  * /transportation-routes/{id}:
//  *   get:
//  *     summary: Retrieve a transportation route by ID
//  *     tags: [Transportation Routes]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: ID of the transportation route
//  *     responses:
//  *       200:
//  *         description: Transportation route retrieved successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TransportationRoute'
//  */
// router.get('/transportation-routes/:id', transportationRoutesController.getTransportationRouteById);

// /**
//  * @swagger
//  * /transportation-routes/{id}:
//  *   put:
//  *     summary: Update a transportation route by ID
//  *     tags: [Transportation Routes]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The transportation route ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/TransportationRoute'
//  *     responses:
//  *       200:
//  *         description: The updated transportation route
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TransportationRoute'
//  *       404:
//  *         description: Transportation route not found
//  */
// router.put('/transportation-routes/:id', transportationRoutesController.updateTransportationRoute);

// /**
//  * @swagger
//  * /transportation-routes/{id}:
//  *   delete:
//  *     summary: Delete a transportation route by ID
//  *     tags: [Transportation Routes]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The transportation route ID
//  *     responses:
//  *       200:
//  *         description: Transportation route deleted
//  *       404:
//  *         description: Transportation route not found
// */
// router.delete('/transportation-routes/:id', transportationRoutesController.deleteTransportationRoute);

// /**

//     ************************** END OF ROUTES FOR TRANSPORTATION ROUTES **************************
//     */

// module.exports = router;
