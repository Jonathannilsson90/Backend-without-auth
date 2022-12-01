const express = require('express');
const app = express();
const items = require("./routes/items");

var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;