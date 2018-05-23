import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { inject: { service }, Component } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  session:     service('session'),
  currentUser: service('current-user'),
  
  model() {
    const headers = {};
    this.get('session').authorize('authorizer:facebook', (headerName, headerValue) => {
      headers[headerName] = headerValue;
    });
    return Ember.$.ajax('http://localhost:3000/users', { headers });
  }
});
