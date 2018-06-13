import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
  dataHref: function() {
    return window.location.href;
  }.property('currentPath')
});
