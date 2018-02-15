const restify = require('restify');
const server = restify.createServer();
const isPrime = require('is-prime');

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/:number', function (req, res, next) {
  if (typeof req.params.number !== 'number') {
    res.status(400);
    return;
  }

  const num = parseInt(req.params.number, 10);
  console.log(num, typeof(num));

  const response = {
    nearest_prime_number: nearestPrime(num as number)
  }

  res.send(response);
  return;
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});


function nearestPrime(num: number) {
  let x, y, result;
  let i = 1;
  let testNumber = num;

  //console.log('testNumber', num);
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


/* Unit Tests */
console.log('\n** unit tests ** \n' );

console.log(nearestPrime(1) === 2, nearestPrime(1), 'nearestPrime(1)');
console.log(nearestPrime(2) === 2, nearestPrime(2), 'nearestPrime(2)');
console.log(nearestPrime(3) === 3, nearestPrime(3), 'nearestPrime(3)');
console.log(nearestPrime(4) === '3,5', nearestPrime(4), 'nearestPrime(4)');
console.log(nearestPrime(8) === 7, nearestPrime(8), 'nearestPrime(8)');
console.log(nearestPrime(14) === 13, nearestPrime(14), 'nearestPrime(14)');
console.log(nearestPrime(26) === '23,29', nearestPrime(26), 'nearestPrime(26)');
console.log(nearestPrime(36) === 37, nearestPrime(36), 'nearestPrime(36)');
console.log(nearestPrime(38) === 37, nearestPrime(38), 'nearestPrime(38)');
console.log(nearestPrime(101) === 101, nearestPrime(101), 'nearestPrime(101)');
console.log(nearestPrime(4782739287) === 4782739267, nearestPrime(4782739287), 'nearestPrime(4782739287)');
