// const express = require('express');
// const router = express.Router();

// // Import controller
// const transportationTechnologyController = require('../controllers/transportationTechnologyController');

// /**
//  * @swagger
//  * /transportation-technology:
//  *   post:
//  *     summary: Create a new transportation technology entry
//  *     tags: [TransportationTechnology]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/TransportationTechnology'
//  *     responses:
//  *       201:
//  *         description: Transportation technology entry created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TransportationTechnology'
//  */
// router.post('/transportation-technology', transportationTechnologyController.createTransportationTechnology);

// /**
//  * @swagger
//  * /transportation-technology:
//  *   get:
//  *     summary: Retrieve a list of transportation technology entries
//  *     tags: [TransportationTechnology]
//  *     responses:
//  *       200:
//  *         description: A list of transportation technology entries
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/TransportationTechnology'
//  */
// router.get('/transportation-technology', transportationTechnologyController.getAllTransportationTechnology);

// /**
//  * @swagger
//  * /transportation-technology/{id}:
//  *   get:
//  *     summary: Retrieve a transportation technology entry by ID
//  *     tags: [TransportationTechnology]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: ID of the transportation technology entry
//  *     responses:
//  *       200:
//  *         description: Transportation technology entry retrieved successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TransportationTechnology'
//  */
// router.get('/transportation-technology/:id', transportationTechnologyController.getTransportationTechnologyById);

// /**
//  * @swagger
//  * /transportation-technology/{id}:
//  *   put:
//  *     summary: Update a transportation technology entry by ID
//  *     tags: [TransportationTechnology]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The transportation technology entry ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/TransportationTechnology'
//  *     responses:
//  *       200:
//  *         description: The updated transportation technology entry
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TransportationTechnology'
//  *       404:
//  *         description: Transportation technology entry not found
//  */
// router.put('/transportation-technology/:id', transportationTechnologyController.updateTransportationTechnology);

// /**
//  * @swagger
//  * /transportation-technology/{id}:
//  *   delete:
//  *     summary: Delete a transportation technology entry by ID
//  *     tags: [TransportationTechnology]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The transportation technology entry ID
//  *     responses:
//  *       200:
//  *         description: Transportation technology entry deleted successfully
//  *       404:
//  *         description: Transportation technology entry not found
// */
// router.delete('/transportation-technology/:id', transportationTechnologyController.deleteTransportationTechnology);

// /**

//     ************************** END OF ROUTES FOR TRANSPORTATION TECHNOLOGY **************************
//     */

// module.exports = router;


