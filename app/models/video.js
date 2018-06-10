import DS from 'ember-data';
import EmberObject, { computed, observer } from '@ember/object';

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
  youTubeImgMaxRes: computed('videoId', 'videoIdComputed', function() {
    let videoId = this.get('videoId') || this.get('videoIdComputed');
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }),
  videoIdComputed: computed('url', function() {
    let url = this.get('url');
    if (!url) {
      return '';
    }
    let regExp = /(youtu.be\/|youtube.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&\"\'>]+)/;
    try {
      return url.match(regExp)[5];
    }
    catch(error) {
      return '';
    }
  }),
});
