'use strict'

// var casper = require('casper').create(
//   {
//     verbose: true,
//     loglevel: 'debug'
//   }
// );

casper.test.begin('tests that http status is 200', 1, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertHttpStatus(200);
  });

  casper.run(function () {
    test.done();
  });
});