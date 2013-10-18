# Flight View Demos

Various (that's the plan, at least) experiments of combining FlightJS with View
components of other frameworks.

## Status

- Ember + Flight: Probably a pretty bad idea. Ember has a nice modular
  architecture, but you still can't just use Ember Views with 2-way-data binding
  out of the box without using the Router. Also, porting it to a different
  template engine would be hard.

- Knockout + Flight: This is great. Combined with ES5 getters and setters it
  feels like magic and requires super little setup code.
