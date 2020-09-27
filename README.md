# HTTP-REST-API-server-node.js

This repository contains a small nodejs HTTP REST API server created using the Express.js framework and tested with Mocha and Chai JavaScript test frameworks.

## Schematic Overview

- controllers
      - v1.js - the controller where the router forwards the request once a GET or POST request is submitted to the API enpoints 'http://localhost:8080/api/v1/quote/car-insurance' and
      http://localhost:8080/v1/quote/car-insurance.
      
- routes 
     - api
        - v1.js - the route which is triggered when a HTTP POST request is submitted to the API enpoint http://localhost:8080/api/v1/quote/car-insurance.
     - v1.js - the route which is triggered when a HTTP GET or POST request is submitted to the API enpoint http://localhost:8080/v1/quote/car-insurance.
     
- es_modules 
     - calculateage.js - an ES6 JavaScript module created to compute the age based on a given birthdate of string format.
     - calculatecivilliability.js - an ES6 JavaScript module created to compute the price for a civil liability insurance for a given age.
     
- node_modules - npm libraries

- test
     -api.js - unit tests created to test the price and age computation modules and integration tests that test the server HTTP API GET and POST requests.
     
- app.js - contains the main logic of the project: calls the routes, starts a local server, sets the HTTP response type
    
- package.json - includes metadata and dependencies relevant to the project.
    
