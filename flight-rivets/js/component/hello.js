define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');
  var withModel = require('component/with_model');

  /**
   * Module exports
   */

  return defineComponent(hello, withModel);

  /**
   * Module function
   */

  function hello() {
    this.defaultAttrs({
      buttonSelector: '.btn'
    });

    this.updateName = function () {
      this.model.firstName = 'Pascal';
      this.model.middleName = '"Douchebag"';
    };

    this.after('initialize', function () {
      this.model = {
        firstName: 'Tom',
        lastName: '#yolo' // I'm so funny.
      };

      this.on('click', {
        'buttonSelector': this.updateName
      });

      console.log('hello() initialized.');
    });
  }

});
