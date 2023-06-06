const express = require('express');
const router = express.Router();

// Import controller
const wasteRecordController = require('../controllers/wasteRecordController');

router.get('/data', async (req, res) => {
  try {
    await wasteRecordController.getAllWasteRecords(req, res);
  } catch (err) {
    console.error(err);  // log error for debugging
    res.status(500).render('error_page', { error: err.message });
  }
});


/**
 * ************************** BEGINNING OF ROUTES FOR WASTE RECORDS **************************
 */

/**
 * @swagger
 * /api/wasterecords:
 *   post:
 *     summary: Create a new waste record
 *     tags: [Waste Records]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteRecord'
 *     responses:
 *       201:
 *         description: Waste record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteRecord'
 */
router.post('/', wasteRecordController.createWasteRecord);

/**
 * @swagger
 * /api/wasterecords:
 *   get:
 *     summary: Retrieve a list of waste records
 *     tags: [Waste Records]
 *     responses:
 *       200:
 *         description: A list of waste records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WasteRecord'
 */
router.get('/', wasteRecordController.getAllWasteRecords);

/**
 * @swagger
 * /api/wasterecords/{id}:
 *   get:
 *     summary: Retrieve a waste record by ID
 *     tags: [Waste Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the waste record
 *     responses:
 *       200:
 *         description: Waste record retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteRecord'
 */
router.get('/:id', wasteRecordController.getWasteRecordById);

/**
 * @swagger
 * /api/wasterecords/{id}:
 *   put:
 *     summary: Update a waste record by ID
 *     tags: [Waste Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WasteRecord'
 *     responses:
 *       200:
 *         description: The updated waste record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WasteRecord'
 *       404:
 *         description: Waste record not found
 */
router.put('/:id', wasteRecordController.updateWasteRecord);

/**
 * @swagger
 * /api/wasterecords/{id}:
 *   delete:
 *     summary: Delete a waste record by ID
 *     tags: [Waste Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The waste record ID
 *     responses:
 *       200:
 *         description: Waste record deleted
 *       404:
 *         description: Waste record not found
 */
router.delete('/:id', wasteRecordController.deleteWasteRecord);

/**
 * ************************** END OF ROUTES FOR WASTE RECORDS **************************
 *  
*/  

module.exports = router;

