import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
  session:     service('session'),
  currentUser: service('current-user'),

  model() {
    return this.store.findAll('video');
  }
});
