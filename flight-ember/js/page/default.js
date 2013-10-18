define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var hello = require('component/hello');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    console.log('Initialized.');

    hello.attachTo('#hello');
  }
});
