const expect = require('chai').expect;
const request = require('superagent');
const app = require('../lib/index');
const start = require('../lib/index').start;
const stop = require('../lib/index').stop;

describe('Controllers', () => {
  let port = 4000;
  let baseUrl = `http://localhost:${port}`;

  before(done => app.start(port, done));
  after(done => app.stop(done));

  describe('requested at /hello', () => {
    it('should say hello', (done) => {
      request.get(`${baseUrl}/hello`).end((err, res) => {
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        expect(res.text).to.equal('Hello world!');
        done();
      })
    });
  });
});
