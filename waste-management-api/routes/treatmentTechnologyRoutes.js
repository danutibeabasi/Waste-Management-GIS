const express = require('express');
const router = express.Router();

// Import controller
const treatmentTechnologyController = require('../controllers/treatmentTechnologyController');

/**
 * ************************** BEGINNING OF ROUTES FOR TREATMENT TECHNOLOGY **************************
 */

/**
 * @swagger
 * /api/treatmenttechnologies:
 *   post:
 *     summary: Create a new treatment technology
 *     tags: [Treatment Technologies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TreatmentTechnology'
 *     responses:
 *       201:
 *         description: Treatment technology created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentTechnology'
 */
router.post('/', treatmentTechnologyController.createTreatmentTechnology);

/**
 * @swagger
 * /api/treatmenttechnologies:
 *   get:
 *     summary: Retrieve a list of treatment technologies
 *     tags: [Treatment Technologies]
 *     responses:
 *       200:
 *         description: A list of treatment technologies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TreatmentTechnology'
 */
router.get('/', treatmentTechnologyController.getAllTreatmentTechnologies);

/**
 * @swagger
 * /api/treatmenttechnologies/{id}:
 *   get:
 *     summary: Retrieve a treatment technology by ID
 *     tags: [Treatment Technologies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the treatment technology
 *     responses:
 *       200:
 *         description: Treatment technology retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentTechnology'
 */
router.get('/:id', treatmentTechnologyController.getTreatmentTechnologyById);

/**
 * @swagger
 * /api/treatmenttechnologies/{id}:
 *   put:
 *     summary: Update a treatment technology by ID
 *     tags: [Treatment Technologies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The treatment technology ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TreatmentTechnology'
 *     responses:
 *       200:
 *         description: The updated treatment technology
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentTechnology'
 *       404:
 *         description: Treatment technology not found
 */
router.put('/:id', treatmentTechnologyController.updateTreatmentTechnology);

/**
 * @swagger
 * /api/treatmenttechnologies/{id}:
 *   delete:
 *     summary: Delete a treatment technology by ID
 *     tags: [Treatment Technologies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The treatment technology ID
 *     responses:
 *       200:
 *         description: Treatment technology deleted
 *       404:
 *         description: Treatment technology not found
 */
router.delete('/:id', treatmentTechnologyController.deleteTreatmentTechnology);

/**
 * ************************** END OF ROUTES FOR TREATMENT TECHNOLOGY **************************
    */  

module.exports = router;

