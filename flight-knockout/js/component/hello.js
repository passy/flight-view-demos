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
      buttonSelector: '.js-name-btn',
      formSelector: '.js-entry-form'
    });

    this.updateName = function () {
      this.model.firstName = 'Pascal';

      console.log(this.model);
    };

    this.handleSubmit = function (e) {
      e.preventDefault();

      this.model.entries.push(this.model.newEntry);
    };

    this.after('initialize', function () {
      var self = this;

      this.model = {
        firstName: 'Tom',
        lastName: 'Assworth', // I'm so funny.
        newEntry: '',
        entries: ['Uno', 'Zwei', 'Three'],
        removeEntry: function (entry) {
          self.model.entries.remove(this);
        }
      };

      ko.track(this.model, ['firstName', 'entries']);

      this.on('click', {
        'buttonSelector': this.updateName
      });

      this.on('submit', {
        formSelector: this.handleSubmit
      });

      console.log('hello() initialized.');
    });
  }

});
