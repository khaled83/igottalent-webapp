import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  currentUser: service('current-user'),
  
  beforeModel(/* transition */) {
    if (this.get('currentUser.user.admin')) {
      this.transitionTo('videos.index-admin'); // Implicitly aborts the on-going transition.
    }
  },
  model: function() {
    return this.store.findAll('video');
  },
  
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    },
    toggleApproved: function(model) {
      model.toggleProperty('approvedUser');
      const router = this;
      model.save().then(function() {
      }, function() {
        router.get('flashMessages').danger('Failed to save video!');
        model.rollbackAttributes();
      });
    }
  }
});
