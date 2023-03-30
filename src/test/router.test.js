const supertest = require('supertest');

const app = require('../app.js');

test('GET /search/:pokName 200 JSON', (done) => {
  supertest(app)
    .get('/search/pikachu')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });

});
