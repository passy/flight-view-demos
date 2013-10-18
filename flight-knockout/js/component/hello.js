define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');
  var withKnockout = require('component/with_knockout');

  /**
   * Module exports
   */

  return defineComponent(hello, withKnockout);

  /**
   * Module function
   */

  function hello() {
    this.defaultAttrs({
      buttonSelector: '.btn'
    });

    this.updateName = function () {
      this.model.firstName = 'Pascal';

      console.log(this.model);
    };

    this.after('initialize', function () {
      this.model = {
        firstName: 'Tom',
        lastName: 'Assworth' // I'm so funny.
      };

      ko.track(this.model, ['firstName']);

      this.on('click', {
        'buttonSelector': this.updateName
      });

      console.log('hello() initialized.');
    });
  }

});
