const nearestPrime = require('../service');
const assert = require('assert');
const expect = require('chai').expect;

describe('Service', () => {
  it('returns error for string', () => {
    try {
      nearestPrime(string);
    }
    catch(err) {
      assert.equal(err, 'ReferenceError: string is not defined');
    }
  });

  it('returns error for null', () => {
    try {
      nearestPrime(null);
    }
    catch(err) {
      assert.equal(err, 'TypeError: Expected a number');
    }
  });

  it('returns error for NaN', () => {
    try {
      nearestPrime(NaN);
    }
    catch(err) {
      assert.equal(err, 'Error: The number must be a integer');
    }
  });

  it('returns error for -100', () => {
    try {
      nearestPrime(-100);
    }
    catch(err) {
      assert.equal(err, 'Error: The number must be a positive integer');
    }
  });

  it('returns error for -1', () => {
    try {
      nearestPrime(-1);
    }
    catch(err) {
      assert.equal(err, 'Error: The number must be a positive integer');
    }
  });

  it('returns error for 0', () => {
    try {
      nearestPrime(0);
    }
    catch(err) {
      assert.equal(err, 'Error: The number must be a positive integer');
    }
  });

  it('finds nearest prime for 1', () => {
    assert.equal(nearestPrime(1), 2);
  });

  it('finds nearest prime for 2', () => {
    assert.equal(nearestPrime(2), 2);
  });

  it('finds nearest prime for 3', () => {
    assert.equal(nearestPrime(3), '3');
  });

  it('finds nearest prime for 4', () => {
    assert.equal(nearestPrime(4), '3,5')
  });

  it('finds nearest prime for 8', () => {
    assert.equal(nearestPrime(8), '7')
  });

  it('finds nearest prime for 14', () => {
    assert.equal(nearestPrime(14), '13')
  });

  it('finds nearest prime for 26', () => {
    assert.equal(nearestPrime(26), '23,29')
  });

  it('finds nearest prime for 36', () => {
    assert.equal(nearestPrime(36), '37')
  });

  it('finds nearest prime for 38', () => {
    assert.equal(nearestPrime(38), '37')
  });

  it('finds nearest prime for 101', () => {
    assert.equal(nearestPrime(101), '101')
  });

  it('finds nearest prime for 1401', () => {
    assert.equal(nearestPrime(1401), '1399')
  });

  it('finds nearest prime for 1401', () => {
    assert.equal(nearestPrime(1401), '1399')
  });

  it('finds nearest prime for 96481', () => {
    assert.equal(nearestPrime(96481), '96479')
  });

  it('finds nearest prime for 100621', () => {
    assert.equal(nearestPrime(100621), '100621')
  });

  it('finds nearest prime for 4782739287', () => {
    assert.equal(nearestPrime(4782739287), '4782739267')
  });
});
