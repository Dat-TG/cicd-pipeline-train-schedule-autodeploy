const request = require('supertest');
const app = require('../app');

describe('Index Page', () => {
  it('renders successfully', (done) => {
    request(app)
      .get('/')
      .expect(200, done);    
  });
});

describe('Trains API', () => {
  it('returns data successfully', (done) => {
    request(app)
      .get('/trains')
      .expect(200)
      .expect('Content-Length', '1093')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
