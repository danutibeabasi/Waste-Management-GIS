const express = require('express');
const router = express.Router();

// Import controller
const wasteContainerController = require('../controllers/wasteContainerController');

/**
 * ************************** BEGINNING OF ROUTES FOR WASTE CONTAINER **************************
 */

/**
 * @swagger
 * /waste-container:
 *   post:
 *     summary: Create a new waste container
 *     tags: [Waste Containers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteContainer'
 *     responses:
 *       201:
 *         description: Waste container created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteContainer'
 */
router.post('/waste-container', wasteContainerController.createWasteContainer);

/**
 * @swagger
 * /waste-container:
 *   get:
 *     summary: Retrieve a list of waste containers
 *     tags: [Waste Containers]
 *     responses:
 *       200:
 *         description: A list of waste containers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteContainer'
 */
router.get('/waste-container', wasteContainerController.getAllWasteContainers);

/**
 * @swagger
 * /waste-container/{id}:
 *   get:
 *     summary: Retrieve a waste container by ID
 *     tags: [Waste Containers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the waste container
 *     responses:
 *       200:
 *         description: Waste container retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteContainer'
 */
router.get('/waste-container/:id', wasteContainerController.getWasteContainerById);

/**
 * @swagger
 * /waste-container/{id}:
 *   put:
 *     summary: Update a waste container by ID
 *     tags: [Waste Containers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste container ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteContainer'
 *     responses:
 *       200:
 *         description: The updated waste container
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteContainer'
 *       404:
 *         description: Waste container not found
 */
router.put('/waste-container/:id', wasteContainerController.updateWasteContainer);

/**
 * @swagger
 * /waste-container/{id}:
 *   delete:
 *     summary: Delete a waste container by ID
 *     tags: [Waste Containers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste container ID
 *     responses:
 *       200:
 *         description: Waste container deleted
 *       404:
 *         description: Waste container not found
 */
router.delete('/waste-container/:id', wasteContainerController.deleteWasteContainer);

/**
 * ************************** END OF ROUTES FOR WASTE CONTAINER **************************
 * 
*/

module.exports = router;

