// const express = require('express');
// const router = express.Router();

// // Import controller
// const buildingController = require('../controllers/buildingController');

// /**
//  * ************************** BEGINNING OF ROUTES FOR BUILDING **************************
//  */

// /**
//  * @swagger
//  * /building:
//  *   post:
//  *     summary: Create a new building
//  *     tags: [Buildings]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Building'
//  *     responses:
//  *       201:
//  *         description: Building created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Building'
//  */
// router.post('/building', buildingController.createBuilding);

// /**
//  * @swagger
//  * /building:
//  *   get:
//  *     summary: Retrieve a list of buildings
//  *     tags: [Buildings]
//  *     responses:
//  *       200:
//  *         description: A list of buildings
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Building'
//  */
// router.get('/building', buildingController.getAllBuildings);

// /**
//  * @swagger
//  * /building/{id}:
//  *   get:
//  *     summary: Retrieve a building by ID
//  *     tags: [Buildings]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: ID of the building
//  *     responses:
//  *       200:
//  *         description: Building retrieved successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Building'
//  */
// router.get('/building/:id', buildingController.getBuildingById);

// /**
//  * @swagger
//  * /building/{id}:
//  *   put:
//  *     summary: Update a building by ID
//  *     tags: [Buildings]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The building ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Building'
//  *     responses:
//  *       200:
//  *         description: The updated building
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Building'
//  *       404:
//  *         description: Building not found
//  */
// router.put('/building/:id', buildingController.updateBuilding);

// /**
//  * @swagger
//  * /building/{id}:
//  *   delete:
//  *     summary: Delete a building by ID
//  *     tags: [Buildings]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: The building ID
//  *     responses:
//  *       200:
//  *         description: Building deleted
//  *       404:
//  *         description: Building not found
//  */
// router.delete('/building/:id', buildingController.deleteBuilding);

// /**
//  * ************************** END OF ROUTES FOR BUILDING **************************
//  */

// module.exports = router;
