const express = require('express');
const router = express.Router();

// Import controller
const collectionScheduleController = require('../controllers/collectionScheduleController');
const wasteTypeController = require('../controllers/wasteTypeController');
const collectionPointsController = require('../controllers/collectionPointsController');

router.get('/', async (req, res) => {
  try {
    const schedules = await collectionScheduleController.getAllCollectionSchedules(req, res);
    const wasteTypes = await wasteTypeController.getAllWasteTypes(req, res);
    const collectionPoints = await collectionPointsController.getAllWasteCollectionPoint(req, res);
    res.render('collection_schedule.pug', { schedules: schedules, collectionPoints: collectionPoints, wasteTypes: wasteTypes });
  } catch (err) {
    console.error(err);  // log error for debugging
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/collectionschedules:
 *   post:
 *     summary: Create a new collection schedule
 *     tags: [CollectionSchedules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CollectionSchedule'
 *     responses:
 *       201:
 *         description: Collection schedule created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CollectionSchedule'
 */
router.post('/', collectionScheduleController.createCollectionSchedule);

/**
 * @swagger
 * /api/collectionschedules:
 *   get:
 *     summary: Retrieve a list of collection schedules
 *     tags: [CollectionSchedules]
 *     responses:
 *       200:
 *         description: A list of collection schedules
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CollectionSchedule'
 */
router.get('/', collectionScheduleController.getAllCollectionSchedules);

/**
 * @swagger
 * /api/collectionschedules/{id}:
 *   get:
 *     summary: Retrieve a collection schedule by ID
 *     tags: [CollectionSchedules]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the collection schedule
 *     responses:
 *       200:
 *         description: Collection schedule retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CollectionSchedule'
 */
router.get('/:id', collectionScheduleController.getCollectionScheduleById);

/**
 * @swagger
 * /api/collectionschedules/{id}:
 *   put:
 *     summary: Update a collection schedule by ID
 *     tags: [CollectionSchedules]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The collection schedule ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CollectionSchedule'
 *     responses:
 *       200:
 *         description: The updated collection schedule
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CollectionSchedule'
 *       404:
 *         description: Collection schedule not found
 */
router.put('/:id', collectionScheduleController.updateCollectionSchedule);

/**
 * @swagger
 * /api/collectionschedules/{id}:
 *   delete:
 *     summary: Delete a collection schedule by ID
 *     tags: [CollectionSchedules]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The collection schedule ID
 *     responses:
 *       200:
 *         description: Collection schedule deleted successfully
 *       404:
 *         description: Collection schedule not found
 */
router.delete('/:id', collectionScheduleController.deleteCollectionSchedule);

module.exports = router;
