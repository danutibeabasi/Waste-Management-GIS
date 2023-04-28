// const express = require('express');
// const router = express.Router();

// // Import controller
// const irisController = require('../controllers/irisController');

// /**
//  * @swagger
//  * /iris:
//  *   post:
//  *     summary: Create a new iris
//  *     tags: [Iris]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Iris'
//  *     responses:
//  *       201:
//  *         description: Iris created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Iris'
//  */
// router.post('/iris', irisController.createIris);

// /**
//  * @swagger
//  * /iris:
//  *   get:
//  *     summary: Retrieve a list of iris
//  *     tags: [Iris]
//  *     responses:
//  *       200:
//  *         description: A list of iris
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Iris'
//  */
// router.get('/iris', irisController.getAllIris);

// /**
//  * @swagger
//  * /iris/{id}:
//  *   get:
//  *     summary: Retrieve an iris by ID
//  *     tags: [Iris]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: ID of the iris
//  *     responses:
//  *       200:
//  *         description: Iris retrieved successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Iris'
//  */
// router.get('/iris/:id', irisController.getIrisById);

// /**
//  * @swagger
//  * /iris/{id}:
//  *   put:
//  *     summary: Update an iris by ID
//  *     tags: [Iris]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The iris ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Iris'
//  *     responses:
//  *       200:
//  *         description: The updated iris
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Iris'
//  *       404:
//  *         description: Iris not found
//  */
// router.put('/iris/:id', irisController.updateIris);

// /**
//  * @swagger
//  * /iris/{id}:
//  *   delete:
//  *     summary: Delete an iris by ID
//  *     tags: [Iris]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The iris ID
//  *     responses:
//  *       200:
//  *         description: Iris deleted successfully
//  *       404:
//  *         description: Iris not found
//  */
// router.delete('/iris/:id', irisController.deleteIris);

// module.exports = router;
