const express = require('express');
const router = express.Router();
const collectionPointsController = require('../controllers/collectionPointsController');
const communesController = require('../controllers/cityController');





// Here is the route for creating a new collection point. Notice it's defined before the '/:id' route
router.get('/create', async (req, res) => {
  try {
    const communes = await communesController.getAllCommunes(req, res);
    res.render('createCollectionPoint', { communes: communes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



/**
 * @swagger
 * /api/collectionpoints:
 *   get:
 *     summary: Retrieve a list of waste collection points
 *     tags: [Waste Collection Points]
 *     responses:
 *       200:
 *         description: A list of waste collection points
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.get('/', collectionPointsController.getAllWasteCollectionPoint);

/**
 * @swagger
 * /api/collectionpoints/{id}:
 *   get:
 *     summary: Retrieve a waste collection point by ID
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the waste collection point
 *     responses:
 *       200:
 *         description: Waste collection point retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.get('/:id', collectionPointsController.getWasteCollectionPointById);

/**
 * @swagger
 * /api/collectionpoints/city/{city_id}:
 *   get:
 *     summary: Retrieve waste collection points by city ID
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: city_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: City ID of the waste collection points
 *     responses:
 *       200:
 *         description: Waste collection points retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.get('/city/:city_id', collectionPointsController.getWasteCollectionPointByCity);

/**
 * @swagger
 * /api/collectionpoints/postalcode/{postal_code}:
 *   get:
 *     summary: Retrieve waste collection points by postal code
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: postal_code
 *         schema:
 *           type: string
 *         required: true
 *         description: Postal code of the waste collection points
 *     responses:
 *       200:
 *         description: Waste collection points retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.get('/postalcode/:postal_code', collectionPointsController.getWasteCollectionPointByPostalCode);

/**
 * @swagger
 * /api/collectionpoints/code/{code}:
 *   get:
 *     summary: Retrieve waste collection points by code
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: Code of the waste collection points
 *     responses:
 *       200:
 *         description: Waste collection points retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.get('/code/:code', collectionPointsController.getWasteCollectionPointByCode);

/**
 * @swagger
 * /api/collectionpoints/{id}:
 *   put:
 *     summary: Update a waste collection point by ID
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste collection point ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteCollectionPoint'
 *     responses:
 *       200:
 *         description: The updated waste collection point
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteCollectionPoint'
 *       404:
 *         description: Waste collection point not found
 */
router.put('/:id', collectionPointsController.updateWasteCollectionPoint);

/**
 * @swagger
 * /api/collectionpoints/{id}:
 *   delete:
 *     summary: Delete a waste collection point by ID
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste collection point ID
 *     responses:
 *       200:
 *         description: Waste collection point deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *       404:
 *         description: Waste collection point not found
 */
router.delete('/:id', collectionPointsController.deleteWasteCollectionPoint);




module.exports = router;