const express = require('express');
const router = express.Router();

// Import controller
const transportationTechnologyController = require('../controllers/transportationTechnologyController');


/**
 * @swagger
 * /api/transportationtechnologies:
 *   post:
 *     summary: Create a new transportation technology entry
 *     tags: [TransportationTechnology]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TransportationTechnology'
 *     responses:
 *       201:
 *         description: Transportation technology entry created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransportationTechnology'
 */
router.post('/', transportationTechnologyController.createTransportationTechnology);

/**
 * @swagger
 * /api/transportationtechnologies:
 *   get:
 *     summary: Retrieve a list of transportation technology entries
 *     tags: [TransportationTechnology]
 *     responses:
 *       200:
 *         description: A list of transportation technology entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TransportationTechnology'
 */
router.get('/', transportationTechnologyController.getAllTransportationTechnology);

/**
 * @swagger
 * /api/transportationtechnologies/{id}:
 *   get:
 *     summary: Retrieve a transportation technology entry by ID
 *     tags: [TransportationTechnology]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the transportation technology entry
 *     responses:
 *       200:
 *         description: Transportation technology entry retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransportationTechnology'
 */
router.get('/:id', transportationTechnologyController.getTransportationTechnologyById);

/**
 * @swagger
 * /api/transportationtechnologies/{id}:
 *   put:
 *     summary: Update a transportation technology entry by ID
 *     tags: [TransportationTechnology]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The transportation technology entry ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TransportationTechnology'
 *     responses:
 *       200:
 *         description: The updated transportation technology entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransportationTechnology'
 *       404:
 *         description: Transportation technology entry not found
 */
router.put('/:id', transportationTechnologyController.updateTransportationTechnology);


/**
 * @swagger
 * /api/transportationtechnologies/{id}:
 *   delete:
 *     summary: Delete a transportation technology entry by ID
 *     tags: [TransportationTechnology]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The transportation technology entry ID
 *     responses:
 *       200:
 *         description: Transportation technology entry deleted successfully
 *       404:
 *         description: Transportation technology entry not found
*/
router.delete('/:id', transportationTechnologyController.deleteTransportationTechnology);

/**

    ************************** END OF ROUTES FOR TRANSPORTATION TECHNOLOGY **************************
    */

module.exports = router;


