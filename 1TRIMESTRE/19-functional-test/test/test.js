const expect = require('chai').expect;
const request = require('supertest');

// Define the app
const app = require('../index.js');

describe('GET /notes', () => {
    it('devuelve una lista de notas', done => {
        request(app)
            .get('/notes')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.equal(`{
                    "success": true,
                    "message": "Notas recibidas",
                    "noteFiles": []
                }`);
                done();
            });
    });
});

describe('POST /notes', () => {
    it('debera de crear una nota', done => {
        const note = {
            titulo: '123',
            contenido: 'hola'
        };

        request(app)
            .post('/notes')
            .send(note)
            .expect(201)
            .end((err, res) => {
                console.log(res.body)
                expect(res.body.note.titulo).to.equal("123");
                expect(res.body.note.contenido).to.equal("Hii");
                done();
            });
    });
});


describe('DELETE /notes', () => {
    it('deberia de borrar una nota', done => {
        request(app)
            .delete('/notes')
            .send(note)
            .expect(200)
            .end((err, res) => {
                done();
            });
    });


});