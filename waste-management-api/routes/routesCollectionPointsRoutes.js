const express = require('express');
const router = express.Router();
const RouteCollectionPointController = require('../controllers/routeCollectionPointsController');

/**
 * @swagger
 * /api/routescollectionpoints:
 *   post:
 *     summary: Create a new route collection point
 *     tags: [RouteCollectionPoints]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RouteCollectionPoints'
 *     responses:
 *       201:
 *         description: Route collection point created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RouteCollectionPoints'
 */

router.post('/', RouteCollectionPointController.createRouteCollectionPoint);

/**
 * @swagger
 * /api/routescollectionpoints:
 *   get:
 *     summary: Get all route collection points
 *     tags: [RouteCollectionPoints]
 *     responses:
 *       200:
 *         description: List of route collection points
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RouteCollectionPoints'
 */

router.get('/', RouteCollectionPointController.getAllRouteCollectionPoints);

/**
 * @swagger
 * /api/routescollectionpoints/{id}:
 *   get:
 *     summary: Get a route collection point by ID
 *     tags: [RouteCollectionPoints]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The route collection point ID
 *     responses:
 *       200:
 *         description: Route collection point data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RouteCollectionPoints'
 */

router.get('/:id', RouteCollectionPointController.getRouteCollectionPointById);

/**
 * @swagger
 * /api/routescollectionpoints/{id}:
 *   put:
 *     summary: Update a route collection point by ID
 *     tags: [RouteCollectionPoints]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The route collection point ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RouteCollectionPoints'
 *     responses:
 *       200:
 *         description: Route collection point updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RouteCollectionPoints'
 */

router.put('/:id', RouteCollectionPointController.updateRouteCollectionPoint);

/**
 * @swagger
 * /api/routescollectionpoints/{id}:
 *   delete:
 *     summary: Delete a route collection point by ID
 *     tags: [RouteCollectionPoints]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The route collection point ID
 *     responses:
 *       200:
 *         description: Route collection point deleted successfully
 */

router.delete('/:id', RouteCollectionPointController.deleteRouteCollectionPoint);


module.exports = router;
