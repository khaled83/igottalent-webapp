import Component from '@ember/component';
import EmberObject, {computed, observer} from '@ember/object';

export default Component.extend({
  tagName: 'img',
  classNames: ['youtube-thumbnail-sm', 'd-none'],
  
  attributeBindings:['src'],
  src: null,
  didInsertElement: function(){
    var _this = this;
    this.$().on('load', function(evt){
        return _this.imageLoaded(evt);
    }).on('error', function(evt){
        return _this.imageError(evt);
    });
    // explicitely call urlChanged, for some reason it doesn't trigger the first time
    _this.urlChanged()
  },
  willDestroyElement: function(){
    this.$().off('load', 'error');
  },
  urlChanged: observer('model.url', function() {
    this.set('src', this.get('model.youTubeImgMaxRes'));
  }),
  imageLoaded: function(event){
    // HD unavailable
    if (this.$()[0].naturalWidth < 1280) {
      this.sendAction('invalidate', 'ERROR_HD_INAVAILABLE', this.get('src'));
      return;
    }
    // HD available
    this.sendAction('validate');
  },
  imageError: function(event){
    this.sendAction('invalidate', 'ERROR_HD_INAVAILABLE', this.get('src'));
  }
});
