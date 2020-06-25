const express = require('express'),
  config = require('./config.js'),
  process = require('process'),
  redis = require('redis');

var app = express();

// connect to redis
var redisClient = redis.createClient(config.redis_port, config.redis_host);
redisClient.set('REDIS_KEY', '0');

app.get('/', (req, res) => {
  redisClient.incr('REDIS_KEY', (err, reply) => {
    res.send("<html><head><title<Page" +
      "</title><head><body><h3>Redis and Express</h3>" +
      "Redis count: " + reply + "</body></html>");
    res.end();
  })
})

var server = app.listen(8080, function() {
  console.log('Express at [%o]', server.address());
});
