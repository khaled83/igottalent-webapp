import Component from '@ember/component';
import EmberObject, {computed, observer} from '@ember/object';

export default Component.extend({
  tagName: 'img',
  attributeBindings:['src', 'style', 'data-toggle', 'aria-haspopup', 'aria-expanded'],
  src: null,
  
  didInsertElement: function(){
    var _this = this;
    this.$().on('load', function(evt){
        return _this.imageLoaded(evt);
    }).on('error', function(evt){
        return _this.imageError(evt);
    });
    this.avatar();
  },
  // Avatar special handler: replaces with avataro when error detected
  avatar: function() {
    if (this.get('classNames').includes('avatar')) {
      this.$().on('error', function(){
        $(this).attr('src', '/img/avatar.png');
      });
    }
  },
  willDestroyElement: function(){
    this.$().off('load', 'error');
  },
  // Success state: override in child components
  imageLoaded: function(event){},
  // Error state:   override in child components
  imageError: function(event){}
});
