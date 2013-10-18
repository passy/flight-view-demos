define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(hello);

  /**
   * Module function
   */

  function hello() {
    this.defaultAttrs({
      template: ''
    });

    this.model = {
      firstName: 'Tom',
      lastName: 'Assworth' // I'm so funny.
    };

    this.loadKnockout = function () {
      ko.applyBindings(this.model, this.node);
    };

    this.after('initialize', function () {
      console.log('hello() initialized.');

      this.loadKnockout();
    });
  }

});
