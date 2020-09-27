const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/v1');
const feedApiRoutes = require('./routes/api/v1');
const quoteController = require('./controllers/v1');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => { 
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();

});

app.use('/v1', feedRoutes);

app.use('/api/v1', feedApiRoutes);

app.listen(8080);
