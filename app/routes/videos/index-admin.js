import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return this.store.findAll('video');
  },
  actions: {
    toggleApproved: function(model) {
      model.toggleProperty('approved');
      const router = this;
      model.save().then(function() {
      }, function() {
        router.get('flashMessages').danger('Failed to save video!');
        model.rollbackAttributes();
      });
    }
  }
});
