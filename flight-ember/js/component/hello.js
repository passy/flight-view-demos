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

    this.attachEmberView = function () {
      var aController = Ember.Object.extend({
        firstName: 'Barry',
        excitedGreeting: function() {
          return 'Hello, ' + this.get('contenfirstName') + '!!!';
        }.property()
      }).create();

      var ParagraphView = Ember.View.extend({
        template: Ember.Handlebars.compile('Name: {{input type="text" value=name placeholder="Enter your name"}}<br>{{excitedGreeting}} firstname: {{name}}'),
        tagName: 'p',
        classNames: ['awesome-view'],
        propertyA: 'awesome',
        propertyB: function () {
          return 'awesomesauce';
        }.property()
      });

      var view = ParagraphView.create({
        controller: aController
      });

      view.appendTo(this.$node);
    };

    this.after('initialize', function () {
      console.log('hello() initialized.');

      this.attachEmberView();
    });
  }

});
