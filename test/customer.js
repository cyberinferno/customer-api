/**
 * customer.js
 *
 * Customer API tests
 */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../index');

chai.use(chaiHttp);

describe('Customers', () => {
  /*
  * Test the /GET route
  */
  describe('/GET customers', () => {
    it('it should GET all the customers', (done) => {
      chai.request(server)
        .get('/customer')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.keys(['results', 'pagination']);
          res.body.results.length.should.be.eql(5);
          done();
        });
    });
  });

  /*
  * Test the /GET/:id route
  */
  describe('/GET a customer', () => {
    it('it should GET info of customer with id 1', (done) => {
      chai.request(server)
        .get('/customer/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.keys(['id', 'name', 'address', 'country', 'phone', 'created_at', 'updated_at']);
          done();
        });
    });
  });
});
