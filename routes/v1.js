const express = require('express');
const bodyParser = require('body-parser');
const quoteController = require('../controllers/v1');
const router = express.Router();

router.get('/quote/car-insurance', quoteController.getQuote);

router.post('/quote/car-insurance', quoteController.postQuote);

module.exports = router;
