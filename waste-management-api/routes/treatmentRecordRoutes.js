const express = require('express');
const router = express.Router();

// Import controller
const treatmentRecordController = require('../controllers/treatmentRecordController');

/**
 * @swagger
 * /api/treatmentrecords:
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
router.post('/', treatmentRecordController.createTreatmentRecord);

/**
 * @swagger
 * /api/treatmentrecords:
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
router.get('/', treatmentRecordController.getAllTreatmentRecords);

/**
 * @swagger
 * /api/treatmentrecords/{id}:
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
router.get('/:id', treatmentRecordController.getTreatmentRecordById);

/**
 * @swagger
 * /api/treatmentrecords/{id}:
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
router.put('/:id', treatmentRecordController.updateTreatmentRecord);

/**
 * @swagger
 * /api/treatmentrecords/{id}:
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
router.delete('/:id', treatmentRecordController.deleteTreatmentRecord);


/**
 * @swagger
 * /api/treatmentrecords/{treatment_site_id}:
 *   get:
 *     summary: Get all treatment records by treatment site ID
 *     tags: [Treatment Records]
 *     parameters:
 *       - in: path
 *         name: treatment_site_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The treatment site ID
 *     responses:
 *       200:
 *         description: List of treatment records for the given treatment site ID
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TreatmentRecord'
 *       404:
 *         description: No treatment records found for the given treatment site ID
 */
router.get('/:treatment_site_id', treatmentRecordController.getTreatmentRecordsBySiteId);



module.exports = router;
