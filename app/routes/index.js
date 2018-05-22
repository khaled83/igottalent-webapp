import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    const headers = {};
    this.get('session').authorize('authorizer:facebook', (headerName, headerValue) => {
      headers[headerName] = headerValue;
    });
    return [];
//    return Ember.$.ajax('http://localhost:3000/users', { headers });
  }
});
