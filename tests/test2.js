'use strict'

var casper = require('casper').create(
  {
    verbose: true,
    loglevel: 'debug'
  }
);

casper.test.begin('localhost:3000 has title "Best. RPG. Ever." and http status = 200', 1, function suite(test) {


  casper.start('http://localhost:3000', function() {
    this.echo(this.getTitle());
  });

  casper.then(function() {
    this.assertHttpStatus(200);
  });

  casper.run(function() {
    test.done();
  });

});