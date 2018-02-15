const isPrime = require('is-prime');

module.exports = function (num: number) {
  let x, y, result;
  let i = 1;
  let testNumber = num;

  if(isPrime(testNumber)) {
    return testNumber;
  }

  if(testNumber < 2) {
    return 2;
  }

  while(true) {
    if(isPrime(testNumber + i)) {
      y = testNumber + i;
    }
    if(isPrime(testNumber - i)) {
      x = testNumber - i;
    }
    if (x && y) {
      result = [x, y].toString();
    }
    if (x && !y) {
      result = x;
    }
    if (!x && y) {
      result = y;
    }
    if (result) {
      return result;
    }
    i++;
  }
}
