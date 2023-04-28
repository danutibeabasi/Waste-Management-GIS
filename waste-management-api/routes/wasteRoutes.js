const express = require('express');
const wasteRoutes = express.Router();

// Import the routes from the other files
const collectionPointsRoutes = require('./collectionPointsRoutes');
const communesRoutes = require('./communesRoutes');
const wasteTypeRoutes = require('./wasteTypesRoutes');

// Use the imported routes as middleware
wasteRoutes.use('/', collectionPointsRoutes);
wasteRoutes.use('/', communesRoutes);
wasteRoutes.use('/', wasteTypeRoutes);

// You can add other routes and middlewares here as needed
module.exports = wasteRoutes;
































































// // Define routes for waste transportation technology
// router.post('/transportation', transportationController.createWasteTransportation);
// router.get('/transportation', transportationController.getAllWasteTransportation);
// router.get('/transportation/:id', transportationController.getWasteTransportationById);
// router.put('/transportation/:id', transportationController.updateWasteTransportation);
// router.delete('/transportation/:id', transportationController.deleteWasteTransportation);



//Indicator routes

// /**
//  * @swagger
//  * /indicators/averagebinsperiris:
//  *   get:
//  *     summary: Retrieve average bins per IRIS
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of average bins per IRIS
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/AverageBinsPerIRIS'
//  */
// router.get('/indicators/averagebinsperiris', indicatorsController.getAverageBinsPerIRIS);

// /**
//  * @swagger
//  * /indicators/collectionpointspercommune:
//  *   get:
//  *     summary: Retrieve collection points per commune
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of collection points per commune
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/CollectionPointsPerCommune'
//  */
// router.get('/indicators/collectionpointspercommune', indicatorsController.getCollectionPointsPerCommune);



// /**
//  * @swagger
//  * /indicators/collectionpointsperplatform:
//  *   get:
//  *     summary: Retrieve collection points per platform
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of collection points per platform
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/CollectionPointsPerPlatform'
//  */
// router.get('/indicators/collectionpointsperplatform', indicatorsController.getCollectionPointsPerPlatform);


// /**
//  * @swagger
//  * /indicators/collectionpointsperiris:
//  *   get:
//  *     summary: Retrieve the number of collection points per IRIS
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of collection points per IRIS
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/CollectionPointsPerIRIS'
//  */
// router.get('/indicators/collectionpointsperiris', indicatorsController.getCollectionPointsPerIRIS);

// /**
//  * @swagger
//  * /indicators/distancesbetweencollectionpointsperplatform:
//  *   get:
//  *     summary: Retrieve the distances between collection points and platform
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of the distances between collection points and platform
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/DistanceBetweenCollectionPointsPerPlatform'
//  */
// router.get('/indicators/distancesbetweencollectionpointsperplatform', indicatorsController.getDistancesBetweenCollectionPointsPerPlatform);


// /**
//  * @swagger
//  * /indicators/proportionofwastecollectedperplatform:
//  *   get:
//  *     summary: Retrieve the proportion of waste collected per platform
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of the proportion of waste collected per platform
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/ProportionOfWasteCollectedPerPlatform'
//  */
// router.get('/indicators/proportionofwastecollectedperplatform', indicatorsController.getProportionOfWasteCollectedPerPlatform);

// /**
//  * @swagger
//  * /indicators/totalwastegeneratedpercommune:
//  *   get:
//  *     summary: Retrieve the total waste generated per commune
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of the total waste generated per commune
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/TotalWasteGeneratedPerCommune'
//  */
// router.get('/indicators/totalwastegeneratedpercommune', indicatorsController.getTotalWasteGeneratedPerCommune);

// /**
//  * @swagger
//  * /indicators/totalwastegeneratedperiris:
//  *   get:
//  *     summary: Retrieve the total waste generated per IRIS
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of the total waste generated per IRIS
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/TotalWasteGeneratedPerIris'
//  */
// router.get('/indicators/totalwastegeneratedperiris', indicatorsController.getTotalWasteGeneratedPerIris);

// /**
//  * @swagger
//  * /indicators/totalwastegeneratedperplatform:
//  *   get:
//  *     summary: Retrieve the total waste generated per platform
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of the total waste generated per platform
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/TotalWasteGeneratedPerPlatform'
//  */
// router.get('/indicators/totalwastegeneratedperplatform', indicatorsController.getTotalWasteGeneratedPerPlatform);

// /**
//  * @swagger
//  * /indicators/wastegenerationpercapitabyiris:
//  *   get:
//  *     summary: Retrieve the waste generation per capita by IRIS
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of waste generation per capita by IRIS
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/WasteGenerationPerCapitaByIris'
//  */
// router.get('/indicators/wastegenerationpercapitabyiris', indicatorsController.getWasteGenerationPerCapitaByIris);

// /**
//  * @swagger
//  * /indicators/wastegenerationpercapitabycommune:
//  *   get:
//  *     summary: Retrieve the waste generation per capita by commune
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of waste generation per capita by commune
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/WasteGenerationPerCapitaByCommune'
//  */
// router.get('/indicators/wastegenerationpercapitabycommune', indicatorsController.getWasteGenerationPerCapitaByCommune);

// /**
//  * @swagger
//  * /indicators/wastegeneratedpercollectionpoint:
//  *   get:
//  *     summary: Retrieve the waste generated per collection point
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of waste generated per collection point
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/WasteGeneratedPerCollectionPoint'
//  */
// router.get('/indicators/wastegeneratedpercollectionpoint', indicatorsController.getWasteGeneratedPerCollectionPoint);

// /**
//  * @swagger
//  * /indicators/wastecollectionefficiencybyplatform:
//  *   get:
//  *     summary: Retrieve the waste collection efficiency by platform
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of waste collection efficiency by platform
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/WasteCollectionEfficiencyByPlatform'
//  */
// router.get('/indicators/wastecollectionefficiencybyplatform', indicatorsController.getWasteCollectionEfficiencyByPlatform);

// /**
//  * @swagger
//  * /indicators/wastecollectionefficiencybycommune:
//  *   get:
//  *     summary: Retrieve the waste collection efficiency by commune
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of waste collection efficiency by commune
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/WasteCollectionEfficiencyByCommune'
//  */
// router.get('/indicators/wastecollectionefficiencybycommune', indicatorsController.getWasteCollectionEfficiencyByCommune);

// /**
//  * @swagger
//  * /indicators/averageweightwastepercollectionpoint:
//  *   get:
//  *     summary: Retrieve the average weight of waste per collection point
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of average weight of waste per collection point
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/AverageWeightWastePerCollectionPoint'
//  */
// router.get('/indicators/averageweightwastepercollectionpoint', indicatorsController.getAverageWeightWastePerCollectionPoint);

// /**
//  * @swagger
//  * /indicators/averageweightwastepercollectionpointbycommune:
//  *   get:
//  *     summary: Retrieve the average weight of waste per collection point by commune
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of average weight of waste per collection point by commune
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/AverageWeightWastePerCollectionPointByCommune'
//  */
// router.get('/indicators/averageweightwastepercollectionpointbycommune', indicatorsController.getAverageWeightWastePerCollectionPointByCommune);

// /**
//  * @swagger
//  * /indicators/averageweightwastepercollectionpointbyiris:
//  *   get:
//  *     summary: Retrieve the average weight of waste per collection point by IRIS
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of average weight of waste per collection point by IRIS
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/AverageWeightWastePerCollectionPointByIRIS'
//  */
// router.get('/indicators/averageweightwastepercollectionpointbyiris', indicatorsController.getAverageWeightWastePerCollectionPointByIRIS);


// /**
//  * @swagger
//  * /indicators/averageweightwasteperbac:
//  *   get:
//  *     summary: Retrieve the average weight of waste per bac
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of average weight of waste per bac
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/AverageWeightWastePerBac'
//  */
// router.get('/indicators/averageweightwasteperbac', indicatorsController.getAverageWeightWastePerBac);

// /**
//  * @swagger
//  * /indicators/populationcoveragebyplatform:
//  *   get:
//  *     summary: Retrieve the population coverage by platform
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of population coverage by platform
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/PopulationCoverageByPlatform'
//  */
// router.get('/indicators/populationcoveragebyplatform', indicatorsController.getPopulationCoverageByPlatform);

// /**
//  * @swagger
//  * /indicators/wastecollectionfrequencybyplatform:
//  *   get:
//  *     summary: Retrieve the waste collection frequency by platform
//  *     tags: [Indicators]
//  *     responses:
//  *       200:
//  *         description: A list of waste collection frequency by platform
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/WasteCollectionFrequencyByPlatform'
//  */
// router.get('/indicators/wastecollectionfrequencybyplatform', indicatorsController.getWasteCollectionFrequencyByPlatform);





























































































