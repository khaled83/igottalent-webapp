import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service('current-user'),

  beforeModel(/* transition */) {
    if (!this.get('currentUser.user.admin')) {
     this.transitionTo('videos.index'); // Implicitly aborts the on-going transition.
    }
  },
  model: function() {
    return this.store.findAll('video');
  },
  actions: {
    toggleApproved: function(model) {
      model.toggleProperty('approvedAdmin');
      const router = this;
      model.save().then(function() {
      }, function() {
        router.get('flashMessages').danger('Failed to save video!');
        model.rollbackAttributes();
      });
    }
  }
});
