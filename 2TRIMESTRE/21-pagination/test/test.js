const expect = require('chai').expect;
const assert = require('chai').assert;

const request = require('supertest');

// Define the app

const app = require('../src/app');

// describe('GET /ping', () => {
//   it('deberia devolver pong', done => {
//     request(app)
//       .get('/ping')
//       .expect(200)
//       .end((err, res) => {
//         console.log(res.body)
//         assert.equal(res.body, 'pong')
//         done();
//       });
//   });
// });


describe('GET /fibonacci?number=5', () => {
  it('deberia devolver la sucesion fibonacci hasta la posicion 100', done => {
    request(app)
      .get('/fibonacci?number=5')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(5);
        assert.equal(String(res.body), String([ 1, 1, 2, 3, 5]))
        done();
      });
  });
});


