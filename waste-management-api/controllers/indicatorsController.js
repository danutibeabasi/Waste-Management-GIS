
// Import the database connection
const db = require('/home/dan/wastemanagement-project/waste-management-api/db.js');












































































































































// //avg bins per iris
// exports.getAverageBinsPerIRIS = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM avg_bins_per_iris'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// //collections points per commune
// exports.getCollectionPointsPerCommune = async (req, res) => {
//     try {
//       const result = await db.manyOrNone(
//         'SELECT * FROM collection_points_per_commune'
//       );
//       res.status(200).json(result);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };
  

// //collection points per platform
// exports.getCollectionPointsPerPlatform = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM collection_points_per_platform'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // collection points per iris
// exports.getCollectionPointsPerIRIS = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT iris, insee_com, commune_name, collection_point_count FROM collection_points_per_iris'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// //Density of collection points per population by commune**
// exports.getCollectionPointsPerPopulationByCommune = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM collection_points_per_population_by_commune'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// //Density of collection points per population by iris
// exports.getCollectionPointDensityPerIRIS = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT iris, insee_com, commune_name, collection_point_count, population, collection_point_density FROM collection_point_density_per_iris'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// //distances between two collection points per platfroms
// exports.getDistancesBetweenCollectionPointsPerPlatform = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM distances_between_points_platforms'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// //proporation of waste collected per platform
// exports.getProportionOfWasteCollectedPerPlatform = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT  * FROM proportion_waste_collected_per_platform'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// //total waste generated per commune
// exports.getTotalWasteGeneratedPerCommune = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM total_waste_generated_commune'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// //total waste generated per iris
// exports.getTotalWasteGeneratedPerIris = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM total_waste_generated_iris'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// //total waste generated per platform
// exports.getTotalWasteGeneratedPerPlatform = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM total_waste_per_platform'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Waste generation per capita by IRIS
// exports.getWasteGenerationPerCapitaByIris = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM waste_generation_iris'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Waste generation per capita by commune
// exports.getWasteGenerationPerCapitaByCommune = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM waste_generation_commune'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// // waste generated per collection point
// exports.getWasteGeneratedPerCollectionPoint = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM waste_per_collection_point'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// // Waste collection efficiency by platform (total weight collected / number of collection points)
// exports.getWasteCollectionEfficiencyByPlatform = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM waste_collection_efficiency_by_platform'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// // Waste collection efficiency by commune (total weight collected / number of collection points)
// exports.getWasteCollectionEfficiencyByCommune = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM waste_collection_efficiency_by_commune'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Average weight of waste per collection point
// exports.getAverageWeightWastePerCollectionPoint = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM avg_weight_waste_per_collection_point'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// // Average weight of waste per collection point by commune
// exports.getAverageWeightWastePerCollectionPointByCommune = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM avg_waste_weight_per_point_by_commune'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Average weight of waste per collection point by IRIS
// exports.getAverageWeightWastePerCollectionPointByIRIS = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM avg_waste_weight_per_point_by_iris'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// // Average weight of waste per bac
// exports.getAverageWeightWastePerBac = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM average_weight_waste_per_bac'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// // Population coverage by platform
// exports.getPopulationCoverageByPlatform = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM population_coverage_by_platform'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // waste_collection_frequency_by_platform
// exports.getWasteCollectionFrequencyByPlatform = async (req, res) => {
//   try {
//     const result = await db.manyOrNone(
//       'SELECT * FROM waste_collection_frequency_by_platform'
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// waste_collection_frequency_by_iris

// waste_collection_frequency_by_commune

// waste_collection_frequency_by_point 

// total_bacs_per_platform

// average_bacs_per_collection_point


















