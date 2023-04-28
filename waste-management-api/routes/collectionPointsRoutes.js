const express = require('express');
const router = express.Router();

// Import controller
const collectionPointsController = require('../controllers/collectionPointsController');

/**
 * ************************** BEGINNING OF ROUTES FOR COLLECTION POINTS **************************
 */

/**
 * @swagger
 * /collectionpoint:
 *   post:
 *     summary: Create a new waste collection point
 *     tags: [Waste Collection Points]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteCollectionPoint'
 *     responses:
 *       201:
 *         description: Waste collection point created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.post('/collectionpoint', collectionPointsController.createWasteCollectionPoint);


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
 */
router.get('/collectionpoint/:id', collectionPointsController.getWasteCollectionPointById);

/**
 * @swagger
 * /collectionpoint/postalcode/{postal_code}:
 *   get:
 *     summary: Retrieve waste collection points by postal code
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: postal_code
 *         schema:
 *           type: integer
 *         required: true
 *         description: Postal code of the waste collection points
 *     responses:
 *       200:
 *         description: Waste collection points retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.get('/collectionpoint/postalcode/:postal_code', collectionPointsController.getWasteCollectionPointByPostalCode);

/**
 * @swagger
 * /collectionpoint/city/{city}:
 *   get:
 *     summary: Retrieve waste collection points by city
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: City of the waste collection points
 *     responses:
 *       200:
 *         description: Waste collection points retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.get('/collectionpoint/city/:city', collectionPointsController.getWasteCollectionPointByCity);

/**
 * @swagger
 * /collectionpoint/code/{code}:
 *   get:
 *     summary: Retrieve waste collection points by code
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: Code of the waste collection points
 *     responses:
 *       200:
 *         description: Waste collection points retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.get('/collectionpoint/code/:code', collectionPointsController.getWasteCollectionPointByCode);


/**
 * @swagger
 * /collectionpoint/{id}:
 *   put:
 *     summary: Update a waste collection point by ID
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste collection point ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteCollectionPoint'
 *     responses:
 *       200:
 *         description: The updated waste collection point
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteCollectionPoint'
 *       404:
 *         description: Waste collection point not found
 */
router.put('/collectionpoint/:id', collectionPointsController.updateWasteCollectionPoint);

/**
 * @swagger
 * /collectionpoint/{id}:
 *   delete:
 *     summary: Delete a waste collection point by ID
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste collection point ID
 *     responses:
 *       200:
 *         description: Waste collection point deleted
 *       404:
 *         description: Waste collection point not found
 */
router.delete('/collectionpoint/:id', collectionPointsController.deleteWasteCollectionPoint);



/**
 * ************************** END OF ROUTES FOR COLLECTION POINTS **************************
 */

module.exports = router;