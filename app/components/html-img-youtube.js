import HtmlImg from './html-img';
import EmberObject, {computed, observer} from '@ember/object';

export default HtmlImg.extend({
  classNames: ['youtube-thumbnail-sm', 'd-none'],
  
  didInsertElement: function(){
    this._super();
    // explicitely call urlChanged, for some reason it doesn't trigger the first time
    this.urlChanged();
  },
  urlChanged: observer('model.url', function() {
    this.set('src', this.get('model.youTubeImgMaxRes'));
  }),
  // Verifies that YouTube video has HD
  imageLoaded: function(event){
    if (this.$()[0].naturalWidth < 1280) {
      this.sendAction('invalidate', 'ERROR_HD_INAVAILABLE', this.get('src'));
      return;
    }
    // HD available
    this.sendAction('validate');
  },
  // Call back `invalidate` function in parent view to handle error state
  imageError: function(event){
    this.sendAction('invalidate', 'ERROR_HD_INAVAILABLE', this.get('src'));
  }
});
