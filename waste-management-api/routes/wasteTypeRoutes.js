const express = require('express');
const router = express.Router();

// Import controller
const wasteTypeController = require('../controllers/wasteTypeController');

/**
 * ************************** BEGINNING OF ROUTES FOR WASTE TYPE **************************
 */

/**
 * @swagger
 * /wastetype:
 *   post:
 *     summary: Create a new waste type
 *     tags: [WasteTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteType'
 *     responses:
 *       201:
 *         description: Waste type created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteType'
 */
router.post('/wastetype', wasteTypeController.createWasteType);

/**
 * @swagger
 * /wastetype:
 *   get:
 *     summary: Retrieve a list of waste types
 *     tags: [WasteTypes]
 *     responses:
 *       200:
 *         description: A list of waste types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteType'
 */
router.get('/wastetype', wasteTypeController.getAllWasteTypes);

/**
 * @swagger
 * /wastetype/{id}:
 *   get:
 *     summary: Retrieve a waste type by ID
 *     tags: [WasteTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the waste type
 *     responses:
 *       200:
 *         description: Waste type retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteType'
 */
router.get('/wastetype/:id', wasteTypeController.getWasteTypeById);

/**
 * @swagger
 * /wastetype/{id}:
 *   put:
 *     summary: Update a waste type by ID
 *     tags: [WasteTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteType'
 *     responses:
 *       200:
 *         description: The updated waste type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteType'
 *       404:
 *         description: Waste type not found
 */
router.put('/wastetype/:id', wasteTypeController.updateWasteType);

/**
 * @swagger
 * /wastetype/{id}:
 *   delete:
 *     summary: Delete a waste type by ID
 *     tags: [WasteTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste type ID
 *     responses:
 *       200:
 *         description: Waste type deleted successfully
 *       404:
 *         description: Waste type not found
 */
router.delete('/wastetype/:id', wasteTypeController.deleteWasteType);

module.exports = router;