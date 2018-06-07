import DS from 'ember-data';
import EmberObject, { computed } from '@ember/object';

export default DS.Model.extend({
  title: DS.attr('string'),
  genre: DS.attr('string'),
  url: DS.attr('string'),
  videoId: DS.attr('string'),
  approvedAdmin: DS.attr('boolean'),
  approvedUser: DS.attr('boolean'),
  live: DS.attr('boolean'),

  // ASSOCIATIONS //
  user: DS.belongsTo('user'),

  //=== COMPUTED PROPERTIES ===
  isSaved: computed.not('isNew'),
  videoIdComputed: computed('url', function() {
    let videoId = this.get('videoId');
    if (videoId) {
      return videoId;
    }

    let url = this.get('url');
    if (!url) {
      return '';
    }

    let regExp = /(youtu.be\/|youtube.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&\"\'>]+)/;
    return url.match(regExp)[5];
  }),
});
