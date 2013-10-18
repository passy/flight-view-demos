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
        },
        animateAdd: function (el) {
          $(el).filter('li').hide().fadeIn();
          console.log('animated', el);
        },
        animateDelete: function (el) {
          // You would wanna use a neat CSS3 animation lib for this, of course.
          $(el).filter('li').fadeOut(1000, function () {
            this.remove();
          });
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
