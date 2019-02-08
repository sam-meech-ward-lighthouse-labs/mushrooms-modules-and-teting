const assert = require('assert').strict;

var eatMushrooms = require('../eatMushrooms.js');

// tests

describe('#eatMushrooms()', function() {
  it('should return hallucinations when the value is maigc', function() {
    assert.deepEqual(eatMushrooms('magic'), 'hallucinations');
  });
  it('should return die when the value is poisen', function() {
    assert.deepEqual(eatMushrooms('poisen'), 'die');
  });
  it('should return 🍄 when the value is anything else', function() {
    assert.deepEqual(eatMushrooms('anything else'), '🍄');
  });
});