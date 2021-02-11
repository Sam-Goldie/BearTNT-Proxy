const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');
const newRelic = require('newrelic');
const cors = require('cors');
const axios = require('axios');
console.log('inside the proxys express server');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

app.get('/loaderio-6f6cd439134575f094836a6c2e629285', (req, res) => {
  res.send('loaderio-6f6cd439134575f094836a6c2e629285');
});

console.log('ABOUT TO APP.GET, I BELIEVE!');
app.get('/listing/*', (req, res) => {
  console.log('Im inside app.get!');
  // doesn't this have to be an api request to the service module?
  // HIGHEST POSSIBLE PRIORITY
  axios.get('http://localhost:3333/api/reviews-module/reviews/:ids')
    .then((response) => {
      res.sendFile(response);
    })
});

module.exports = app;