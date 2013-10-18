define([], function () {
  return function withKnockout() {
    this.after('initialize', function () {
      ko.applyBindings(this.model, this.node);
    });
  };
});
