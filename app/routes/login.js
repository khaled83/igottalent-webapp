import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import Route from '@ember/routing/route';

export default Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return this.store.query('video', {
      filter: {
        unauthorized: true
      }
    });
  }
});