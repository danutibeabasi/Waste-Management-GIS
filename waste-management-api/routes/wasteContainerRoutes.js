const express = require('express');
const router = express.Router();


// Import controller
const wasteContainerController = require('../controllers/wasteContainerController');
const wasteTypeController = require('../controllers/wasteTypeController');
const collectionPointsController = require('../controllers/collectionPointsController');
const assignedWasteContainerController = require('../controllers/assignedWasteContainerController');


router.get('/', async (req, res) => {
  try {
    const containerList = await wasteContainerController.getAllWasteContainers(req, res);
    const assignedContainers = await assignedWasteContainerController.getAllAssignedWasteContainers(req, res);
    const wasteTypes = await wasteTypeController.getAllWasteTypes(req, res);
    const collectionPoints = await collectionPointsController.getAllWasteCollectionPoint(req, res);

    res.render('waste_containers', { 
      containerList, 
      assignedContainers, 
      collectionPoints, 
      wasteTypes 
    });
  } catch (err) {
    console.error(err);  // log error for debugging
    res.status(500).json({ error: err.message });
  }
});







/**
 * ************************** BEGINNING OF ROUTES FOR WASTE CONTAINER **************************
 */

/**
 * @swagger
 * /api/wastecontainers:
 *   post:
 *     summary: Create a new waste container
 *     tags: [Waste Containers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteContainer'
 *     responses:
 *       201:
 *         description: Waste container created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteContainer'
 */
router.post('/', wasteContainerController.createWasteContainer);

/**
 * @swagger
 * /api/wastecontainers:
 *   get:
 *     summary: Retrieve a list of waste containers
 *     tags: [Waste Containers]
 *     responses:
 *       200:
 *         description: A list of waste containers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteContainer'
 */
router.get('/', wasteContainerController.getAllWasteContainers);

/**
 * @swagger
 * /api/wastecontainers/{id}:
 *   get:
 *     summary: Retrieve a waste container by ID
 *     tags: [Waste Containers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the waste container
 *     responses:
 *       200:
 *         description: Waste container retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteContainer'
 */
router.get('/:id', wasteContainerController.getWasteContainerById);

/**
 * @swagger
 * /api/wastecontainers/{id}:
 *   put:
 *     summary: Update a waste container by ID
 *     tags: [Waste Containers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste container ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteContainer'
 *     responses:
 *       200:
 *         description: The updated waste container
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteContainer'
 *       404:
 *         description: Waste container not found
 */
router.put('/:id', wasteContainerController.updateWasteContainer);

/**
 * @swagger
 * /api/wastecontainers/{id}:
 *   delete:
 *     summary: Delete a waste container by ID
 *     tags: [Waste Containers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste container ID
 *     responses:
 *       200:
 *         description: Waste container deleted
 *       404:
 *         description: Waste container not found
 */
router.delete('/:id', wasteContainerController.deleteWasteContainer);

/**
 * ************************** END OF ROUTES FOR WASTE CONTAINER **************************
 * 
*/

module.exports = router;

