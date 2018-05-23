import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  flashMessages: inject(),
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
        router.get('flashMessages').danger('Failed to save video!');
        model.rollbackAttributes();
      });
    }
  },
  model: function() {
    return this.store.findAll('video');
  }
});
