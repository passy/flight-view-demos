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
      buttonSelector: '.js-name-btn',
      formSelector: '.js-entry-form'
    });

    this.updateName = function () {
      this.model.firstName = 'Pascal';
      this.model.middleName = '"Douchebag"';
    };

    this.handleSubmit = function (e) {
      e.preventDefault();

      this.addToList(this.model.newEntry);
      this.model.newEntry = '';
    };

    this.addToList = function (entry) {
      this.model.entries.push(entry);
    };

    this.after('initialize', function () {
      this.model = {
        firstName: 'Tom',
        lastName: '#yolo',
        entries: ['Uno', 'Two', 'Drei'],
        removeEntry: function (e, scope) {
          scope.entries.splice(scope.entries.indexOf(scope.entry), 1);
        }
      };

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
