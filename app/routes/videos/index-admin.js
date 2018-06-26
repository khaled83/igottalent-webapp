import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import InfinityRoute from "ember-infinity/mixins/route";

export default Route.extend(InfinityRoute, {
  currentUser: service('current-user'),
  
  params: {
    /* ember-infinity */
    perPage: 9,
    startingPage: 1,
    perPageParam: null,
    pageParam: "offset",
    totalPagesParam: "meta.page-count",
  },

  beforeModel(/* transition */) {
    if (!this.get('currentUser.user.admin')) {
     this.transitionTo('videos.index'); // Implicitly aborts the on-going transition.
    }
  },
  model: function() {
    return this.infinityModel("video", this.get('params'));
  },
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    },
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
