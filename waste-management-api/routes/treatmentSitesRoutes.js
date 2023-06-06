const express = require('express');
const router = express.Router();
const treatmentSiteController = require('../controllers/treatmentSiteController');
const communesController = require('../controllers/communesController');


// Here is the route for creating a new collection point. Notice it's defined before the '/:id' route
router.get('/create', async (req, res) => {
  try {
    const communes = await communesController.getAllCommunes(req, res);
    res.render('createTreatmentSites', { communes: communes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



/**
 * ************************** BEGINNING OF ROUTES FOR TREATMENT SITE **************************
 */

/**
 * @swagger
 * /api/treatmentsite:
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
router.post('/', treatmentSiteController.createTreatmentSite);

/**
 * @swagger
 * /api/treatmentsite:
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
router.get('/', treatmentSiteController.getAllTreatmentSites);

/**
 * @swagger
 * /api/treatmentsite/{id}:
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
router.get('/:id', treatmentSiteController.getTreatmentSiteById);

/**
 * @swagger
 * /api/treatmentsite/{id}:
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
router.put('/:id', treatmentSiteController.updateTreatmentSite);

/**
 * @swagger
 * /api/treatmentsite/{id}:
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
router.delete('/:id', treatmentSiteController.deleteTreatmentSite);

/**
 * ************************** END OF ROUTES FOR TREATMENT SITE **************************
 */

module.exports = router;
