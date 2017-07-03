import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
		clothes: this.store.findAll('cloth'),
		reviews: this.store.findAll('review')
	});
}
});
