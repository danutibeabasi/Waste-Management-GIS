const express = require('express');
const router = express.Router();
const collectionPointsController = require('../controllers/collectionPointsController');
const communesController = require('../controllers/communesController');





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
 *   post:
 *     summary: Create a new waste collection point
 *     tags: [Waste Collection Points]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteCollectionPoint'
 *     responses:
 *       201:
 *         description: Waste collection point created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteCollectionPoint'
 */
router.post('/', collectionPointsController.createWasteCollectionPoint);

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
 * /api/collectionpoints/postalcode/{postal_code}:
 *   get:
 *     summary: Retrieve waste collection points by postal code
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: postal_code
 *         schema:
 *           type: integer
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
 * /api/collectionpoints/city/{city}:
    get:
 *     summary: Retrieve waste collection points by city
 *     tags: [Waste Collection Points]
 *     parameters:
 *       - in: path
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: City of the waste collection points
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
router.get('/city/:city', collectionPointsController.getWasteCollectionPointByCity);

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
 *         description: Waste collection point deleted
 *       404:
 *         description: Waste collection point not found
 */
router.delete('/:id', collectionPointsController.deleteWasteCollectionPoint);






module.exports = router;