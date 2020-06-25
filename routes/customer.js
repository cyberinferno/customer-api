/**
 * customer.js
 *
 * Customer routes handler
 */

const express = require('express');
const db = require('../db');

const RESULTS_PER_PAGE = 5;

const router = express.Router();

// Customer list endpoint
router.get('/', (req, res) => {
  db.connection.query('SELECT COUNT(*) as count FROM customer', (error, results) => {
    if (error) {
      throw error;
    }
    let page = parseInt(req.query.page, 10) || 1;
    let skip = (page - 1) * RESULTS_PER_PAGE;
    let limit = skip + ',' + RESULTS_PER_PAGE;
    let totalPages = Math.ceil(results[0].count / RESULTS_PER_PAGE);
    if (totalPages < page) {
      return res.status(422).json({
        errors: [{
          msg: `Queried page ${page} is greater than total available pages i.e ${totalPages}`,
        }],
      });
    }
    db.connection.query('SELECT * FROM customer ORDER BY id LIMIT ' + limit, (err, iResults) => {
      if (err) {
        throw err;
      }
      res.json({
        results: iResults,
        pagination: {
          total: totalPages,
          current: page,
          perPage: RESULTS_PER_PAGE,
          previous: page > 1 ? page - 1 : undefined,
          next: page < RESULTS_PER_PAGE ? page + 1 : undefined,
        },
      });
    });
  });
});

// Customer info endpoint
router.get('/:id', (req, res) => {
  db.connection.query('SELECT * FROM customer WHERE id = ?', [req.params.id], (error, results) => {
    if (error) {
      throw error;
    }
    if (results.length === 0) {
      return res.status(404).json({
        errors: [{
          msg: 'Customer not found',
        }],
      });
    }
    res.json(results[0]);
  });
});

module.exports = router;
