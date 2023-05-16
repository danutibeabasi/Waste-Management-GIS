const express = require('express');
const router = express.Router();

// Import controller
const treatmentSiteController = require('../controllers/treatmentSiteController');

/**
 * ************************** BEGINNING OF ROUTES FOR TREATMENT SITE **************************
 */

/**
 * @swagger
 * /treatmentsite:
 *   post:
 *     summary: Create a new treatment site
 *     tags: [Treatment Sites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TreatmentSite'
 *     responses:
 *       201:
 *         description: Treatment site created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentSite'
 */
router.post('/treatmentsite', treatmentSiteController.createTreatmentSite);

/**
 * @swagger
 * /treatmentsite:
 *   get:
 *     summary: Retrieve a list of treatment sites
 *     tags: [Treatment Sites]
 *     responses:
 *       200:
 *         description: A list of treatment sites
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TreatmentSite'
 */
router.get('/treatmentsite', treatmentSiteController.getAllTreatmentSites);

/**
 * @swagger
 * /treatmentsite/{id}:
 *   get:
 *     summary: Retrieve a treatment site by ID
 *     tags: [Treatment Sites]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the treatment site
 *     responses:
 *       200:
 *         description: Treatment site retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentSite'
 */
router.get('/treatmentsite/:id', treatmentSiteController.getTreatmentSiteById);

/**
 * @swagger
 * /treatmentsite/{id}:
 *   put:
 *     summary: Update a treatment site by ID
 *     tags: [Treatment Sites]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The treatment site ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TreatmentSite'
 *     responses:
 *       200:
 *         description: The updated treatment site
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreatmentSite'
 *       404:
 *         description: Treatment site not found
 */
router.put('/treatmentsite/:id', treatmentSiteController.updateTreatmentSite);

/**
 * @swagger
 * /treatmentsite/{id}:
 *   delete:
 *     summary: Delete a treatment site by ID
 *     tags: [Treatment Sites]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The treatment site ID
 *     responses:
 *       200:
 *         description: Treatment site deleted
 *       404:
 *         description: Treatment site not found
 */
router.delete('/treatmentsite/:id', treatmentSiteController.deleteTreatmentSite);

/**
 * ************************** END OF ROUTES FOR TREATMENT SITE **************************
 */

module.exports = router;
