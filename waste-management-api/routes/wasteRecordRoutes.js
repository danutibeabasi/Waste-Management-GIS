const express = require('express');
const router = express.Router();

// Import controller
const wasteRecordController = require('../controllers/wasteRecordController');

/**
 * ************************** BEGINNING OF ROUTES FOR WASTE RECORDS **************************
 */

/**
 * @swagger
 * /waste-records:
 *   post:
 *     summary: Create a new waste record
 *     tags: [Waste Records]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteRecord'
 *     responses:
 *       201:
 *         description: Waste record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteRecord'
 */
router.post('/waste-records', wasteRecordController.createWasteRecord);

/**
 * @swagger
 * /waste-records:
 *   get:
 *     summary: Retrieve a list of waste records
 *     tags: [Waste Records]
 *     responses:
 *       200:
 *         description: A list of waste records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteRecord'
 */
router.get('/waste-records', wasteRecordController.getAllWasteRecords);

/**
 * @swagger
 * /waste-records/{id}:
 *   get:
 *     summary: Retrieve a waste record by ID
 *     tags: [Waste Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the waste record
 *     responses:
 *       200:
 *         description: Waste record retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteRecord'
 */
router.get('/waste-records/:id', wasteRecordController.getWasteRecordById);

/**
 * @swagger
 * /waste-records/{id}:
 *   put:
 *     summary: Update a waste record by ID
 *     tags: [Waste Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteRecord'
 *     responses:
 *       200:
 *         description: The updated waste record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteRecord'
 *       404:
 *         description: Waste record not found
 */
router.put('/waste-records/:id', wasteRecordController.updateWasteRecord);

/**
 * @swagger
 * /waste-records/{id}:
 *   delete:
 *     summary: Delete a waste record by ID
 *     tags: [Waste Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste record ID
 *     responses:
 *       200:
 *         description: Waste record deleted
 *       404:
 *         description: Waste record not found
 */
router.delete('/waste-records/:id', wasteRecordController.deleteWasteRecord);

/**
 * ************************** END OF ROUTES FOR WASTE RECORDS **************************
 *  
*/  

module.exports = router;

