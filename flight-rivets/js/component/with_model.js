define(function (require) {

  return withModel;

  function withModel() {

    this.rebind = function () {
      // Try to figure out if we need to rebind to the model becuase a new key has been added.
      // I'm certain this could be better – perhaps rivets provides something already?
      var len = this._model.keys.length;
      this._model.keys = Object.keys(this.model);
      if (this._model.keys.length > len) {
        console.log('rebinding');
        rivets.bind(this.$node, this.model);
      }
    };

    this.before('initialize', function () {
      this.model = this.model || {};
      this._model = this._model || {
        keys: []
      };
    });

    this.after('initialize', function () {
      this.rebind();
    });

    this.after('on', this.rebind);

  }

});