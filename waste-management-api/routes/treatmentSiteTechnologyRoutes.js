const express = require('express');
const router = express.Router();

// Import controller
const treatmentSiteTechnologiesController = require('../controllers/treatmentSiteTechnologyController');

/**
 * @swagger
 * /treatment-site-technologies:
 *   post:
 *     summary: Create a new treatment site technology
 *     tags: [Treatment Site Technologies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TreatmentSiteTechnology'
 *     responses:
 *       201:
 *         description: Treatment site technology created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentSiteTechnology'
 */
router.post('/treatment-site-technologies', treatmentSiteTechnologiesController.createTreatmentSiteTechnology);

/**
 * @swagger
 * /treatment-site-technologies:
 *   get:
 *     summary: Retrieve a list of treatment site technologies
 *     tags: [Treatment Site Technologies]
 *     responses:
 *       200:
 *         description: A list of treatment site technologies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TreatmentSiteTechnology'
 */
router.get('/treatment-site-technologies', treatmentSiteTechnologiesController.getAllTreatmentSiteTechnologies);

/**
 * @swagger
 * /treatment-site-technologies/{id}:
 *   get:
 *     summary: Retrieve a treatment site technology by ID
 *     tags: [Treatment Site Technologies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the treatment site technology
 *     responses:
 *       200:
 *         description: Treatment site technology retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentSiteTechnology'
 */
router.get('/treatment-site-technologies/:id', treatmentSiteTechnologiesController.getTreatmentSiteTechnologyById);

/**
 * @swagger
 * /treatment-site-technologies/{id}:
 *   put:
 *     summary: Update a treatment site technology by ID
 *     tags: [Treatment Site Technologies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The treatment site technology ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TreatmentSiteTechnology'
 *     responses:
 *       200:
 *         description: The updated treatment site technology
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentSiteTechnology'
 *       404:
 *         description: Treatment site technology not found
 */
router.put('/treatment-site-technologies/:id', treatmentSiteTechnologiesController.updateTreatmentSiteTechnology);

/**
 * @swagger
 * /treatment-site-technologies/{id}:
 *   delete:
 *     summary: Delete a treatment site technology by ID
 *     tags: [Treatment Site Technologies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The treatment site technology ID
 *     responses:
  *       200:
 *         description: Treatment site technology deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Treatment site technology deleted successfully
 *       404:
 *         description: Treatment site technology not found
 */
router.delete('/treatment-site-technologies/:id', treatmentSiteTechnologiesController.deleteTreatmentSiteTechnology);

module.exports = router;
