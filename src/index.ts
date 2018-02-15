const restify = require('restify');
const server = restify.createServer();
const isPrime = require('is-prime');
const nearestPrime = require('./service');

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/:number', function (req, res, next) {
  const num = parseInt(req.params.number, 10);

  if (!Number.isInteger(num)) {
    res.send('wrong request');
    res.status(400);
    return;
  }

  const response = {
    nearest_prime_number: nearestPrime(num as number)
  }

  res.send(response);
  return;
});

server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
