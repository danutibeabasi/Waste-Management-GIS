const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Waste Management API',
      version: '1.0.0',
      description: 'API for managing waste collection points',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

specs.components = {
  schemas: {
    WasteCollectionPoint: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        address_1: { type: 'string' },
        address_2: { type: 'string' },
        postal_code: { type: 'string' },
        city: { type: 'string' },
        phone: { type: 'string' },
        email: { type: 'string' },
        latitude: { type: 'number' },
        longitude: { type: 'number' },
        code: { type: 'string' },
      },
    },
    Commune: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        commune_codeid: { type: 'string' },
        name: { type: 'string' },
        insee_code: { type: 'string' },
        statut: { type: 'string' },
        population: { type: 'integer' },
        insee_can: { type: 'string' },
        insee_arr: { type: 'string' },
        insee_dep: { type: 'string' },
        insee_reg: { type: 'string' },
        insee_epci: { type: 'string' },
        total_weight: { type: 'number' },
        sum_average_weight: { type: 'number' },
        min_weight: { type: 'number' },
        max_weight: { type: 'number' },
        total_bins: { type: 'integer' },
        sum_average_bins: { type: 'number' },
      },
    },
    WasteType:{
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
      },
    },
    WasteContainer: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        capacity: { type: 'integer' },
        description: { type: 'string' },

      },  
    },
    AssignedWasteContainer: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        collection_point_id: { type: 'integer' },
        waste_container_id: { type: 'integer' },
        waste_type_id: { type: 'integer' },
      }
    },
    CollectionSchedule: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        collection_point_id: { type: 'integer' },
        waste_type_id: { type: 'integer' },
        collection_day_of_week: { type: 'integer' },
        collection_frequency: { type: 'integer' },
      }
    },
    WasteRecord: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        collection_point_id: { type: 'integer' },
        waste_type_id: { type: 'integer' },
        weight: { type: 'number' },
        collection_date: { type: 'string' },
        building_id: { type: 'integer' },
      }
    },
    Population: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        commune_id: { type: 'integer' },
        iris_id: { type: 'integer' },
        year: { type: 'integer' },
        population_count: { type: 'integer' },
        building_id: { type: 'integer' },
        }
      },
      TransportationVehicle: {
        type: 'object',
        properties: {
        id: { type: 'integer' },
        vehicle_type: { type: 'string' },
        capacity: { type: 'integer' },
        fuel_type: { type: 'string' },
        technology_id: { type: 'integer' },
        }
      },
    // AverageBinsPerIRIS: {
    //   type: 'object',
    //   properties: {
    //     insee_com: { type: 'string' },
    //     commune_name: { type: 'string' },
    //     iris: { type: 'string' },
    //     average_bins: { type: 'number' },
    //   },
    // },
    // CollectionPointsPerCommune: {
    //   type: 'object',
    //   properties: {
    //     insee_com: { type: 'string' },
    //     commune_name: { type: 'string' },
    //     collection_points: { type: 'integer' },
    //   },
    // },
    // CollectionPointsPerPlatform: {
    //   type: 'object',
    //   properties: {
    //     platform: { type: 'string' },
    //     collection_points: { type: 'integer' },
    //   },
    // },
    // CollectionPointsPerIRIS: {
    //   type: 'object',
    //   properties: {
    //     iris: { type: 'string' },
    //     insee_com: { type: 'string' },
    //     commune_name: { type: 'string' },
    //     collection_point_count: { type: 'integer' },
    //   },
    // },
    // DistanceBetweenCollectionPointsPerPlatform: {
    //   type: 'object',
    //   properties: {
    //     platform_code: { type: 'string' },
    //     platform_name: { type: 'string' },
    //     collection_point_1: { type: 'string' },
    //     collection_point_2: { type: 'string' },
    //     distance: { type: 'number' },
    //   },
    // },
    // ProportionOfWasteCollectedPerPlatform: {
    //   type: 'object',
    //   properties: {
    //     platform_code: { type: 'string' },
    //     platform_name: { type: 'string' },
    //     total_waste: { type: 'number' },
    //     proportion_of_total_waste: { type: 'number' },
    //   },
    // },
    // TotalWasteGeneratedPerCommune: {
    //   type: 'object',
    //   properties: {
    //     insee_com: { type: 'string' },
    //     commune_name: { type: 'string' },
    //     total_waste: { type: 'number' },
    //   },
    // },
    // TotalWasteGeneratedPerIris: {
    //   type: 'object',
    //   properties: {
    //     iris: { type: 'string' },
    //     insee_com: { type: 'string' },
    //     commune_name: { type: 'string' },
    //     total_waste: { type: 'number' },
    //   },
    // },
    // TotalWasteGeneratedPerPlatform: {
    //   type: 'object',
    //   properties: {
    //     platform_code: { type: 'string' },
    //     platform_name: { type: 'string' },
    //     total_waste: { type: 'number' },
    //   },
    // },
    // WasteGenerationPerCapitaByIris: {
    //   type: 'object',
    //   properties: {
    //     iris: { type: 'string' },
    //     insee_com: { type: 'string' },
    //     commune_name: { type: 'string' },
    //     population: { type: 'integer' },
    //     total_waste: { type: 'number' },
    //     waste_per_capita: { type: 'number' },
    //   },
    // },
    // WasteGenerationPerCapitaByCommune: {
    //   type: 'object',
    //   properties: {
    //     insee_com: { type: 'string' },
    //     commune_name: { type: 'string' },
    //     population: { type: 'integer' },
    //     total_waste: { type: 'number' },
    //     waste_per_capita: { type: 'number' },
    //   },
    // },
    // WasteGeneratedPerCollectionPoint: {
    //   type: 'object',
    //   properties: {
    //     Code: { type: 'string' },
    //     Nom: { type: 'string' },
    //     waste_generated: { type: 'number' },
    //   },
    // },
    // WasteCollectionEfficiencyByPlatform: {
    //   type: 'object',
    //   properties: {
    //     platform_code: { type: 'string' },
    //     platform_name: { type: 'string' },
    //     total_waste_collected: { type: 'number' },
    //     total_waste_generated: { type: 'number' },
    //     efficiency_percentage: { type: 'number' },
    //   },
    // },
    // WasteCollectionEfficiencyByCommune: {
    //   type: 'object',
    //   properties: {
    //     insee_com: { type: 'string' },
    //     commune_name: { type: 'string' },
    //     total_waste_collected: { type: 'number' },
    //     total_waste_generated: { type: 'number' },
    //     efficiency_percentage: { type: 'number' },
    //   },
    // },
    // AverageWeightWastePerCollectionPoint: {
    //   type: 'object',
    //   properties: {
    //     collection_point_id: { type: 'integer' },
    //     collection_point_name: { type: 'string' },
    //     average_waste_weight: { type: 'number' },
    //   },
    // },
    // AverageWeightWastePerCollectionPointByCommune: {
    //   type: 'object',
    //   properties: {
    //     insee_com: { type: 'integer' },
    //     commune_name: { type: 'string' },
    //     average_waste_weight: { type: 'number' },
    //   },
    // },
    // AverageWeightWastePerCollectionPointByIRIS: {
    //   type: 'object',
    //   properties: {
    //     iris: { type: 'integer' },
    //     average_waste_weight: { type: 'number' },
    //   },
    // },
    // AverageWeightWastePerBac: {
    //   type: 'object',
    //   properties: {
    //     collection_point_name: { type: 'string' },
    //     collection_point_code: { type: 'string' },
    //     average_weight_per_bac: { type: 'number' },
    //   },
    // },
    // PopulationCoverageByPlatform: {
    //   type: 'object',
    //   properties: {
    //     platform_code: { type: 'string' },
    //     platform_name: { type: 'string' },
    //     total_population: { type: 'integer' },
    //   },
    // },
    // WasteCollectionFrequencyByPlatform: {
    //   type: 'object',
    //   properties: {
    //     platform_code: { type: 'string' },
    //     platform_name: { type: 'string' },
    //     average_collection_frequency: { type: 'number' },
    //   },
    // },
  },
};




















































































module.exports = specs;
