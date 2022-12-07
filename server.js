// Fetching package Express
const express = require('express')

// Fetching data from .env file - supported by config attribute.
const dotenv = require('dotenv').config()

// .env file is a file used to declare hidden information regarding the server, .env file is
// not pushed to github to keep for instance the PORT value hidden.

// creating variable port using PORT value.
// PORT value is fetched from .env , If .env value is missing makes 3000 the PORT value
const port = process.env.PORT || 3000;

//calling for server to start
const app = express();

// Middleware
app.use(express.json())
app.use('/api/clothes', require('./routes/clothingRoutes'))

//Server startup message.
app.listen(port, () => console.log(`Server started on port ${port}`))