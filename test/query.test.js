const assert = require('assert');
const utils = require('../src/utils');

describe('Can filter using query', () => {
  it('Should have one result', () => {
    const searchResult = utils.findQueryMatches({
      query: {
        name: 'Test',
      },
      data: [{
        name: 'Test',
        location: 'Code',
      }, {
        name: 'Test2',
        location: 'Earth',
      }],
    });
    
    assert.equal(searchResult.length, 1);
    assert.equal(searchResult[0].name, 'Test');
    assert.equal(searchResult[0].location, 'Code');
  });

  it('Should have no results', () => {
    const searchResult = utils.findQueryMatches({
      query: {
        name: 'Other',
      },
      data: [{
        name: 'Test',
        location: 'Code',
      }, {
        name: 'Test2',
        location: 'Earth',
      }],
    });

    assert.equal(searchResult.length, 0);
  });

});
