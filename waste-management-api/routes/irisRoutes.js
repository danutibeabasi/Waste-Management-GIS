const express = require('express');
const router = express.Router();

// Import the Iris controller
const irisController = require('../controllers/irisController');

/**
 * @swagger
 * /api/iris:
 *   post:
 *     summary: Create a new Iris
 *     tags: [Iris]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Iris'
 *     responses:
 *       201:
 *         description: Iris created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Iris'
 */
router.post('/', irisController.createIris);

/**
 * @swagger
 * /api/iris:
 *   get:
 *     summary: Retrieve a list of Iris
 *     tags: [Iris]
 *     responses:
 *       200:
 *         description: A list of Iris
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Iris'
 */
router.get('/', irisController.getAllIris);

/**
 * @swagger
 * /api/iris/{id}:
 *   get:
 *     summary: Retrieve an Iris by ID
 *     tags: [Iris]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Iris
 *     responses:
 *       200:
 *         description: Iris retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Iris'
 */
router.get('/:id', irisController.getIrisById);

/**
 * @swagger
 * /api/iris:
 *   put:
 *     summary: Update an Iris
 *     tags: [Iris]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Iris'
 *     responses:
 *       200:
 *         description: Iris updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Iris'
 */
router.put('/', irisController.updateIris);

/**
 * @swagger
 * /api/iris/{id}:
 *   delete:
 *     summary: Delete an Iris
 *     tags: [Iris]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Iris
 *     responses:
 *       200:
 *         description: Iris deleted successfully
 */
router.delete('/:id', irisController.deleteIris);


/**
 * @swagger
 * /api/iris/{id}/statistics:
 *   get:
 *     summary: Retrieve statistics of an iris by ID
 *     tags: [Iris]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The iris ID
 *     responses:
 *       200:
 *         description: Iris statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IrisStatistics'
 *       404:
 *         description: No iris records found for this iris ID
 */
router.get('/:id/statistics', irisController.getIrisStatisticsById);

/**
 * @swagger
 * /api/iris/statistics/all:
 *   get:
 *     summary: Retrieve statistics of all iris
 *     tags: [Iris]
 *     responses:
 *       200:
 *         description: All Iris statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IrisStatistics'
 *       404:
 *         description: No iris records found
 */
router.get('/statistics/all', irisController.getAllIrisStatistics);

/**
 * @swagger
 * /api/iris/statistics/max-weight:
 *   get:
 *     summary: Retrieve iris statistics by maximum weight
 *     tags: [Iris]
 *     responses:
 *       200:
 *         description: Iris statistics by max weight retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IrisStatistics'
 *       404:
 *         description: No iris records found
 */
router.get('/statistics/max-weight', irisController.getIrisStatisticsByMaxWeight);

/**
 * @swagger
 * /api/iris/statistics/min-weight:
 *   get:
 *     summary: Retrieve iris statistics by minimum weight
 *     tags: [Iris]
 *     responses:
 *       200:
 *         description: Iris statistics by min weight retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IrisStatistics'
 *       404:
 *         description: No iris records found
 */
router.get('/statistics/min-weight', irisController.getIrisStatisticsByMinWeight);

module.exports = router;
