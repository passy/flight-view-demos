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
      buttonSelector: '.js-name-btn',
      formSelector: '.js-entry-form'
    });

    this.updateName = function () {
      this.model.firstName = 'Pascal';

      console.log(this.model);
    };

    this.handleSubmit = function (e) {
      e.preventDefault();

      this.addToList(this.model.newEntry);
    };

    this.addToList = function (entry) {
      this.model.entries.push(entry);
    };

    this.after('initialize', function () {
      this.model = {
        firstName: 'Tom',
        lastName: 'Assworth', // I'm so funny.
        entries: ['Uno', 'Two', 'Drei']
      };

      rivets.bind(this.$node, this.model);

      this.on('click', {
        buttonSelector: this.updateName
      });

      this.on('submit', {
        formSelector: this.handleSubmit
      });

      console.log('hello() initialized.');
    });
  }

});
