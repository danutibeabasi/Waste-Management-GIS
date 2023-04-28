// const express = require('express');
// const router = express.Router();

// // Import controller
// const populationController = require('../controllers/populationController');

// /**
//  * @swagger
//  * /population:
//  *   post:
//  *     summary: Create a new population entry
//  *     tags: [Population]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Population'
//  *     responses:
//  *       201:
//  *         description: Population entry created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Population'
//  */
// router.post('/population', populationController.createPopulation);

// /**
//  * @swagger
//  * /population:
//  *   get:
//  *     summary: Retrieve a list of population entries
//  *     tags: [Population]
//  *     responses:
//  *       200:
//  *         description: A list of population entries
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Population'
//  */
// router.get('/population', populationController.getAllPopulation);

// /**
//  * @swagger
//  * /population/{id}:
//  *   get:
//  *     summary: Retrieve a population entry by ID
//  *     tags: [Population]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: ID of the population entry
//  *     responses:
//  *       200:
//  *         description: Population entry retrieved successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Population'
//  */
// router.get('/population/:id', populationController.getPopulationById);

// /**
//  * @swagger
//  * /population/{id}:
//  *   put:
//  *     summary: Update a population entry by ID
//  *     tags: [Population]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The population entry ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Population'
//  *     responses:
//  *       200:
//  *         description: The updated population entry
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Population'
//  *       404:
//  *         description: Population entry not found
//  */
// router.put('/population/:id', populationController.updatePopulation);

// /**
//  * @swagger
//  * /population/{id}:
//  *   delete:
//  *     summary: Delete a population entry by ID
//  *     tags: [Population]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The population entry ID
//  *     responses:
//  *       200:
//  *         description: Population entry deleted successfully
//  *       404:
//  *         description: Population entry not found
//  */
// router.delete('/population/:id', populationController.deletePopulation);

// module.exports = router;