const expect = require('chai').expect;
const request = require('superagent');
const app = require('../lib/index');

describe('Name database model', () => {
  let nameDb = require('../lib/models');

  describe('getRandomNames()', () => {
    describe('when given an argument of 3', () => {
      it('should return 3 random names', done => {
        let names = nameDb.getRandomNames(3);
        expect(names).to.be.a('array').with.length(3);
        expect(names[0]).to.be.a('string');
        done();
      })
    })
  })
});
