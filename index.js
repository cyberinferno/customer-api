/**
 * index.js
 *
 * Entry point of API
 */

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const config = require('config');

const app = express();
const PORT = process.env.PORT || config.get('port');
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);

// Logger middleware
app.use(logger('tiny'));

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Enable CORS
app.use(cors());

// Making sure browser caching is disabled
app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

// Routes
app.use('/', require(path.join(__dirname, 'routes/default')));
app.use('/customer', require(path.join(__dirname, 'routes/customer')));

// 404 handler
app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});

// Error message response
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    errors: [{
      msg: err.message,
    }],
  });
});

app.listen(PORT, () => {
  console.log(
    `${config.get('apiName')} server started on Port ${app.get(
      'port'
    )} | Environment : ${app.get('env')}`
  );
});

// Required for running tests
module.exports = app;
