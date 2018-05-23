import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    },
    toggleApproved: function(model) {
      model.toggleProperty('approved');
      const router = this;
      model.save().then(function() {
      }, function() {
        console.log('Failed to save the model');
        // router.get('notifier').error('Failed to save the model');
      });
    }
  },
  model: function() {
    return this.store.findAll('video');
  }
});
