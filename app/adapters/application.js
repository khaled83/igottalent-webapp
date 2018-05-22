import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default DS.JSONAPIAdapter.extend(AuthenticatedRouteMixin, {
  
  headers: Ember.computed('session.authToken', function() {
    const headers = {};
    this.get('session').authorize('authorizer:facebook', (headerName, headerValue) => {
      headers[headerName] = headerValue;
    });
    return headers;
  })
});
