const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the 'assets' folder inside the 'views' folder
app.use('/assets', express.static(path.join(__dirname, 'views/assets')));


// Handle 404 errors for static files
app.use((req, res, next) => {
  if (req.path.startsWith('/assets/')) {
    res.status(404).send('Not found');
  } else {
    next();
  }
});

// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Import routes
const wasteRoutes = require('./routes/wasteRoutes');

// Use routes
app.use('/', wasteRoutes);

// Route to serve index.pug
app.get('/', (req, res) => {
    res.render('index');
});

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
