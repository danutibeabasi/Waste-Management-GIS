const express = require('express');
const router = express.Router();

// Import controller
const wasteTypeController = require('../controllers/wasteTypeController');

router.get('/', async (req, res) => {
  try {
    const types = await wasteTypeController.getAllWasteTypes(req);
    res.render('waste_types', { types });
  } catch (err) {
    console.error(err);
    // render the template with an empty types array in case of an error
    res.render('waste_types', { types: [] });
  }
});




/**
 * ************************** BEGINNING OF ROUTES FOR WASTE TYPE **************************
 */

/**
 * @swagger
 * /api/wastetypes:
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
router.post('/', wasteTypeController.createWasteType);

/**
 * @swagger
 * /api/wastetypes:
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
router.get('/', wasteTypeController.getAllWasteTypes);

/**
 * @swagger
 * /api/wastetypes/{id}:
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
router.get('/:id', wasteTypeController.getWasteTypeById);

/**
 * @swagger
 * /api/wastetypes/{id}:
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
router.put('/:id', wasteTypeController.updateWasteType);

/**
 * @swagger
 * /api/wastetypes/{id}:
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
router.delete('/:id', wasteTypeController.deleteWasteType);

module.exports = router;