import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentUser: service(),
  
  didInsertElement: function() {
    // TODO: move this to html-img
    // Replace avatar when error detected
    $('img.avatar').on('error', function(){
      $(this).attr('src', '/img/avatar.png');
    });
  },
  
  actions: {
    logout() {
      this.get('logout')();
    }
  }
});
