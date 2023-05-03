const express = require('express');
const router = express.Router();

// Import controller
const collectionScheduleController = require('../controllers/collectionScheduleController');

/**
 * @swagger
 * /collectionschedule:
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
router.post('/collectionschedule', collectionScheduleController.createCollectionSchedule);

/**
 * @swagger
 * /collectionschedule:
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
router.get('/collectionschedule', collectionScheduleController.getAllCollectionSchedules);

/**
 * @swagger
 * /collectionschedule/{id}:
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
router.get('/collectionschedule/:id', collectionScheduleController.getCollectionScheduleById);

/**
 * @swagger
 * /collectionschedule/{id}:
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
router.put('/collectionschedule/:id', collectionScheduleController.updateCollectionSchedule);

/**
 * @swagger
 * /collectionschedule/{id}:
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
router.delete('/collectionschedule/:id', collectionScheduleController.deleteCollectionSchedule);

module.exports = router;
