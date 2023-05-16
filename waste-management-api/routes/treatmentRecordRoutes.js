const express = require('express');
const router = express.Router();

// Import controller
const treatmentRecordController = require('../controllers/treatmentRecordController');

/**
 * @swagger
 * /treatment-records:
 *   post:
 *     summary: Create a new treatment record
 *     tags: [Treatment Records]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TreatmentRecord'
 *     responses:
 *       201:
 *         description: Treatment record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentRecord'
 */
router.post('/treatment-records', treatmentRecordController.createTreatmentRecord);

/**
 * @swagger
 * /treatment-records:
 *   get:
 *     summary: Retrieve a list of treatment records
 *     tags: [Treatment Records]
 *     responses:
 *       200:
 *         description: A list of treatment records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TreatmentRecord'
 */
router.get('/treatment-records', treatmentRecordController.getAllTreatmentRecords);

/**
 * @swagger
 * /treatment-records/{id}:
 *   get:
 *     summary: Retrieve a treatment record by ID
 *     tags: [Treatment Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the treatment record
 *     responses:
 *       200:
 *         description: Treatment record retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentRecord'
 */
router.get('/treatment-records/:id', treatmentRecordController.getTreatmentRecordById);

/**
 * @swagger
 * /treatment-records/{id}:
 *   put:
 *     summary: Update a treatment record by ID
 *     tags: [Treatment Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The treatment record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TreatmentRecord'
 *     responses:
 *       200:
 *         description: The updated treatment record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentRecord'
 *       404:
 *         description: Treatment record not found
 */
router.put('/treatment-records/:id', treatmentRecordController.updateTreatmentRecord);

/**
 * @swagger
 * /treatment-records/{id}:
 *   delete:
 *     summary: Delete a treatment record by ID
 *     tags: [Treatment Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The treatment record ID
 *     responses:
 *       200:
 *         description: Treatment record deleted
 *       404:
 *         description: Treatment record not found
 */
router.delete('/treatment-records/:id', treatmentRecordController.deleteTreatmentRecord);

module.exports = router;
