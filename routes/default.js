/**
 * default.js
 *
 * Default route handler
 */

const express = require('express');
const config = require('config');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: config.get('apiName'),
    version: config.get('version'),
  });
});

module.exports = router;
