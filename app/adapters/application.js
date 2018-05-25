import DS from 'ember-data';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend(AuthenticatedRouteMixin, {

  headers: computed('session.authToken', function() {
    const headers = {};
    this.get('session').authorize('authorizer:facebook', (headerName, headerValue) => {
      headers[headerName] = headerValue;
    });
    return headers;
  })
});
