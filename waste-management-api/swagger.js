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
        nom: { type: 'string' },
        address1: { type: 'string' },
        address2: { type: 'string' },
        code_postal: { type: 'string' },
        ville: { type: 'string' },
        tel1: { type: 'string' },
        mail: { type: 'string' },
        latitude: { type: 'number' },
        longitude: { type: 'number' },
        poids_total: { type: 'number' },
        poids_moyen: { type: 'number' },
        min: { type: 'number' },
        max: { type: 'number' },
        nombre_de_bacs_totals: { type: 'integer' },
        nombre_de_bacs_moyens: { type: 'integer' },
        nombre_de_passage: { type: 'integer' },
      },
    },
  },
};

module.exports = specs;
