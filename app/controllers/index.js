import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  infinity: service(),
  
  /**
    [ember-infinity] An action will be called with the result of your Route model hook from the `infinity-loader` component, 
    similar to this:
    // closure action in infinity-loader component
    get(this, 'infinityLoad')(infinityModelContent);
    @method loadMoreProduct
    @param {InfinityModel} products
  */
  actions: {
    loadMoreVideo(videos) {
      this.get('infinity').infinityLoad(videos);
    }
  },
});
