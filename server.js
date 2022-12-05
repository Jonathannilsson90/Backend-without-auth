// Fetching package Express
const express = require('express')
// Fetching data from .env file - supported by config attribute.
const dotenv = require('dotenv').config()
// Port declared in .env IF .env is missing 3000 is the port.
const port = process.env.PORT || 3000;

const { v4: uuidv4 } = require('uuid');
uuidv4();

//calling for server to start
const app = express();
// Middleware
app.use(express.json())
app.use('/api/clothes', require('./routes/clothingRoutes'))
//Server startup message.
app.listen(port, () => console.log(`Server started on port ${port}`))