const expect = require('chai').expect;
const request = require('supertest');

// Define the app
const app = require('../src/app');

describe('GET /users', () => {
  it('should return a list of users', done => {
    request(app)
      .get('/users')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });
});

describe('GET /users/:id', () => {
  it('should return a single user', done => {
    request(app)
      .get('/users/1')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return a 404 if the user is not found', done => {
    request(app)
      .get('/users/12345')
      .expect(404)
      .end(done);
  });
});

describe('POST /users', () => {
  it('should create a new user', done => {
    const user = {
      name: 'John Doe',
    };

    request(app)
      .post('/users')
      .send(user)
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.include(user);
        done();
      });
  });
});

describe('PUT /users/:id', () => {
  it('should update a user', done => {
    const user = {
      name: 'John Will',
    };

    request(app)
      .put('/users/1')
      .send(user)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.include(user);
        done();
      });
  });

  it('should return a 404 if the user is not found', done => {
    request(app)
      .put('/users/12345')
      .expect(404)
      .end(done);
  });
});

describe('PATCH /users/:id', () => {
  it('should update a user', done => {
    const user = {
      name: 'John Doe'
    };

    request(app)
      .patch('/users/1')
      .send(user)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.include(user);
        done();
      });
  });

  it('should return a 404 if the user is not found', done => {
    request(app)
      .patch('/users/12345')
      .expect(404)
      .end(done);
  });
});

describe('DELETE /users/:id', () => {
  it('should delete a user', done => {
    request(app)
      .delete('/users/1')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return a 404 if the user is not found', done => {
    request(app)
      .delete('/users/12345')
      .expect(404)
      .end(done);
  });
});