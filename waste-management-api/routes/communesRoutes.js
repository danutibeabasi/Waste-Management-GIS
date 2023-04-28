const express = require('express');
const router = express.Router();

// Import controller
const communeController = require('../controllers/communesController');

/**
 * ************************** BEGINNING OF ROUTES FOR COMMUNE **************************
 */

/**
 * @swagger
 * /commune:
 *   post:
 *     summary: Create a new commune
 *     tags: [Communes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Commune'
 *     responses:
 *       201:
 *         description: Commune created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Commune'
 */
router.post('/commune', communeController.createCommune);

/**
 * @swagger
 * /commune:
 *   get:
 *     summary: Retrieve a list of communes
 *     tags: [Communes]
 *     responses:
 *       200:
 *         description: A list of communes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Commune'
 */
router.get('/commune', communeController.getAllCommunes);

/**
 * @swagger
 * /commune/{id}:
 *   get:
 *     summary: Retrieve a commune by ID
 *     tags: [Communes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the commune
 *     responses:
 *       200:
 *         description: Commune retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Commune'
 */
router.get('/commune/:id', communeController.getCommuneById);

// /**
//  * @swagger
//  * /commune/name/{name}:
//  *   get:
//  *     summary: Retrieve communes by name
//  *     tags: [Communes]
//  *     parameters:
//  *       - in: path
//  *         name: name
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: Name of the commune
//  *     responses:
//  *       200:
//  *         description: Communes retrieved successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Commune'
//  */
// router.get('/commune/name/:name', communeController.getCommuneByName);

/**
 * @swagger
 * /commune/{id}:
 *   put:
 *     summary: Update a commune by ID
 *     tags: [Communes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The commune ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Commune'
 *     responses:
 *       200:
 *         description: The updated commune
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Commune'
 *       404:
 *         description: Commune not found
 */
router.put('/commune/:id', communeController.updateCommune);

/**
 * @swagger
 * /commune/{id}:
 *   delete:
 *     summary: Delete a commune by ID
 *     tags: [Communes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The commune ID
 *     responses:
 *       200:
 *         description: Commune deleted
 *       404:
 *         description: Commune not found
 */
router.delete('/commune/:id', communeController.deleteCommune);

/**
 * ************************** END OF ROUTES FOR COMMUNE **************************
 */

module.exports = router;