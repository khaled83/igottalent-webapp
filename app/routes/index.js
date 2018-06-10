import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';
import InfinityRoute from "ember-infinity/mixins/route";

export default Route.extend(AuthenticatedRouteMixin, InfinityRoute, {
  session:     service('session'),
  currentUser: service('current-user'),
  
  params: {
    /* ember-infinity */
    perPage: 9,
    startingPage: 1,
    perPageParam: null,
    pageParam: "offset",
    totalPagesParam: "meta.page-count",
  },
  
  model() {
    return this.infinityModel("video", this.get('params'));
  }
});
