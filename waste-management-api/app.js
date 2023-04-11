const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Import routes
const wasteRoutes = require('./routes/wasteRoutes');

// Use routes
app.use('/', wasteRoutes);

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
