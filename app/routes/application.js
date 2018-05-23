import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),
  
  beforeModel() {
    return this._loadCurrentUser();
  },
  
  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },
  
  // @see https://github.com/simplabs/ember-simple-auth/blob/master/guides/managing-current-user.md
  _loadCurrentUser() {
    return this.get('currentUser').load().catch((e) => { 
      this.get('session').invalidate(); 
    });
  }
  
});
