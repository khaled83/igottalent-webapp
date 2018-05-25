import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend(AuthenticatedRouteMixin, {
  session:     service('session'),
  currentUser: service('current-user'),

  model() {
    const headers = {};
    this.get('session').authorize('authorizer:facebook', (headerName, headerValue) => {
      headers[headerName] = headerValue;
    });
    return $.ajax('http://localhost:3000/users', { headers });
  }
});
