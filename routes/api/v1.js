const express = require('express');
const bodyParser = require('body-parser');
const quoteController = require('../../controllers/v1');
const routerApi = express.Router();

routerApi.post('/quote/car-insurance', quoteController.postQuote);

module.exports = routerApi;
