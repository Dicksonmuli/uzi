import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
  price: DS.attr(),
  type: DS.attr(),
	gender: DS.attr(),
  image: DS.attr(),
  age: DS.attr(),
	date: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),
  material: DS.attr(),
});
