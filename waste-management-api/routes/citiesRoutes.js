const express = require('express');
const router = express.Router();

// Import controller
const cityController = require('../controllers/cityController');

/**
 * ************************** BEGINNING OF ROUTES FOR CITY **************************
 */

/**
 * @swagger
 * /api/cities/total-waste-generated-realtime:
 *   get:
 *     summary: Retrieve total waste generated per city in real-time
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: Total waste generated data retrieved successfully
 *       404:
 *         description: No data found for the cities.
 *       500:
 *         description: Internal server error
 */
router.get('/total-waste-generated-realtime', cityController.getTotalWastePerCityRealtime);


/**
 * @swagger
 * /api/cities/average-waste-per-capita:
 *   get:
 *     summary: Retrieve average waste per capita for all cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: Average waste per capita data retrieved successfully
 *       404:
 *         description: No data found for the cities.
 *       500:
 *         description: Internal server error
 */
router.get('/average-waste-per-capita', cityController.getAvgWastePerCapitaAllCities);

/**
 * @swagger
 * /api/cities/collection-points-per-capita:
 *   get:
 *     summary: Retrieve number of collection points per capita for all cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: Collection points per capita data retrieved successfully
 *       404:
 *         description: No data found for the cities.
 *       500:
 *         description: Internal server error
 */
router.get('/collection-points-per-capita', cityController.getNumCollectionPointsPerCapita);


/**
 * @swagger
 * /api/cities:
 *   post:
 *     summary: Create a new city
 *     tags: [Cities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cities'
 *     responses:
 *       201:
 *         description: City created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cities'
 */
router.post('/', cityController.createCity);

/**
 * @swagger
 * /api/cities:
 *   get:
 *     summary: Retrieve a list of cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: A list of cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cities'
 */
router.get('/', cityController.getAllCities);

/**
 * @swagger
 * /api/cities/{id}:
 *   get:
 *     summary: Retrieve a city by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the city
 *     responses:
 *       200:
 *         description: City retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cities'
 */
router.get('/:id', cityController.getCityById);

/**
 * @swagger
 * /api/cities/{id}:
 *   put:
 *     summary: Update a city by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The city ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cities'
 *     responses:
 *       200:
 *         description: The updated city
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cities'
 *       404:
 *         description: City not found
 */
router.put('/:id', cityController.updateCity);

/**
 * @swagger
 * /api/cities/{id}:
 *   delete:
 *     summary: Delete a city by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The city ID
 *     responses:
 *       200:
 *         description: City deleted
 *       404:
 *         description: City not found
 */
router.delete('/:id', cityController.deleteCity);

/**
 * ************************** END OF ROUTES FOR CITY **************************
 */




/**
 * @swagger
 * /api/cities/{city_id}/statistics:
 *   get:
 *     summary: Retrieve statistics of a city by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: city_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the city
 *     responses:
 *       200:
 *         description: City statistics retrieved successfully
 *       404:
 *         description: No waste record found for this city.
 *       500:
 *         description: Internal server error
 */
router.get('/:city_id/statistics', cityController.getCityStatistics);

/**
 * @swagger
 * /api/cities/{city_id}/statistics/year/{year}:
 *   get:
 *     summary: Retrieve statistics of a city by ID for a particular year
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: city_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the city
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: Year of the statistics
 *     responses:
 *       200:
 *         description: City statistics for the given year retrieved successfully
 *       404:
 *         description: No waste record found for this city and year.
 *       500:
 *         description: Internal server error
 */
router.get('/:city_id/statistics/year/:year', cityController.getCityStatisticsForYear);

/**
 * @swagger
 * /api/cities/{city_id}/statistics/year/{year}/month/{month}:
 *   get:
 *     summary: Retrieve statistics of a city by ID for a particular month and year
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: city_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the city
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: Year of the statistics
 *       - in: path
 *         name: month
 *         schema:
 *           type: integer
 *         required: true
 *         description: Month of the statistics
 *     responses:
 *       200:
 *         description: City statistics for the given month and year retrieved successfully
 *       404:
 *         description: No waste record found for this city in the specified month and year.
 *       500:
 *         description: Internal server error
 */
router.get('/:city_id/statistics/year/:year/month/:month', cityController.getCityStatisticsForMonth);

/**
 * @swagger
 * /api/cities/statistics/total_waste:
 *   get:
 *     summary: Retrieve total waste statistics for all cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: Total waste for all cities retrieved successfully
 *       404:
 *         description: No waste record found for any city.
 *       500:
 *         description: Internal server error
 */
router.get('/statistics/total_waste', cityController.getTotalWasteForAllCities);

/**
 * @swagger
 * /api/cities/statistics/waste_type/{waste_type_id}:
 *   get:
 *     summary: Retrieve waste type statistics for all cities
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: waste_type_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the waste type
 *     responses:
 *       200:
 *         description: Waste type statistics for all cities retrieved successfully
 *       404:
 *         description: No waste record found for this waste type in any city.
 *       500:
 *         description: Internal server error
 */
router.get('/statistics/waste_type/:waste_type_id', cityController.getWasteTypeStatisticsForAllCities);

/**
 * @swagger
 * /api/cities/{city_id}/average-waste-per-capita:
 *   get:
 *     summary: Retrieve average waste per capita of a city by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: city_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the city
 *     responses:
 *       200:
 *         description: Average waste per capita data retrieved successfully
 *       404:
 *         description: No data found for this city.
 *       500:
 *         description: Internal server error
 */
router.get('/:city_id/average-waste-per-capita', cityController.getAvgWastePerCapita);

/**
 * @swagger
 * /api/cities/average-waste-per-capita:
 *   get:
 *     summary: Retrieve average waste per capita for all cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: Average waste per capita data retrieved successfully
 *       404:
 *         description: No data found for the cities.
 *       500:
 *         description: Internal server error
 */
router.get('/average-waste-per-capita', cityController.getAvgWastePerCapitaAllCities);


/**
 * @swagger
 * /api/cities/{city_id}/collection-points-per-capita:
 *   get:
 *     summary: Retrieve number of collection points per capita of a city by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: city_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the city
 *     responses:
 *       200:
 *         description: Collection points per capita data retrieved successfully
 *       404:
 *         description: No data found for this city.
 *       500:
 *         description: Internal server error
 */
router.get('/:city_id/collection-points-per-capita', cityController.getCollectionPointsPerCapita);


/**
 * @swagger
 * /api/cities/collection-efficiency:
 *   get:
 *     summary: Retrieve the waste collection efficiency for all cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: Waste collection efficiency data retrieved successfully
 *       404:
 *         description: No data found for the cities.
 *       500:
 *         description: Internal server error
 */
router.get('/collection-efficiency', cityController.getWasteCollectionEfficiency);

/**
 * @swagger
 * /api/cities/waste-variability:
 *   get:
 *     summary: Retrieve the waste variability for all cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: Waste variability data retrieved successfully
 *       404:
 *         description: No data found for the cities.
 *       500:
 *         description: Internal server error
 */
router.get('/waste-variability', cityController.getWasteVariability);

module.exports = router;
