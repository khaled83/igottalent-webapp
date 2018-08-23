import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentUser: service(),
  
  actions: {
    logout() {
      this.get('logout')();
    },
    toggleAdmin() {
      this.get('toggleAdmin')();
    }
  }
});
