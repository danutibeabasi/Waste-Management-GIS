const express = require('express');
const router = express.Router();

// Import controller
const assignedWasteContainerController = require('../controllers/assignedWasteContainerController');

/**
 * ************************** BEGINNING OF ROUTES FOR ASSIGNED WASTE CONTAINERS **************************
 */

/**
 * @swagger
 * /assigned-waste-container:
 *   post:
 *     summary: Create a new assigned waste container
 *     tags: [Assigned Waste Containers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssignedWasteContainer'
 *     responses:
 *       201:
 *         description: Assigned waste container created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AssignedWasteContainer'
 */
router.post('/assigned-waste-container', assignedWasteContainerController.createAssignedWasteContainer);

/**
 * @swagger
 * /assigned-waste-container:
 *   get:
 *     summary: Retrieve a list of assigned waste containers
 *     tags: [Assigned Waste Containers]
 *     responses:
 *       200:
 *         description: A list of assigned waste containers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AssignedWasteContainer'
 */
router.get('/assigned-waste-container', assignedWasteContainerController.getAllAssignedWasteContainers);

/**
 * @swagger
 * /assigned-waste-container/{id}:
 *   get:
 *     summary: Retrieve an assigned waste container by ID
 *     tags: [Assigned Waste Containers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the assigned waste container
 *     responses:
 *       200:
 *         description: Assigned waste container retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AssignedWasteContainer'
 */
router.get('/assigned-waste-container/:id', assignedWasteContainerController.getAssignedWasteContainerById);

/**
 * @swagger
 * /assigned-waste-container/{id}:
 *   put:
 *     summary: Update an assigned waste container by ID
 *     tags: [Assigned Waste Containers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The assigned waste container ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssignedWasteContainer'
 *     responses:
 *       200:
 *         description: The updated assigned waste container
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AssignedWasteContainer'
 *       404:
 *         description: Assigned waste container not found
 */
router.put('/assigned-waste-container/:id', assignedWasteContainerController.updateAssignedWasteContainer);

/**
 * @swagger
 * /assigned-waste-container/{id}:
 *   delete:
 *     summary: Delete an assigned waste container by ID
 *     tags: [Assigned Waste Containers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
  *           type: integer
 *         required: true
 *         description: The assigned waste container ID
 *     responses:
 *       200:
 *         description: Assigned waste container deleted
 *       404:
 *         description: Assigned waste container not found
 */
router.delete('/assigned-waste-container/:id', assignedWasteContainerController.deleteAssignedWasteContainer);

/**
 * ************************** END OF ROUTES FOR ASSIGNED WASTE CONTAINERS **************************
 */

module.exports = router;

