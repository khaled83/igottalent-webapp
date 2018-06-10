import Controller from '@ember/controller';
import EmberObject, {computed, observer} from '@ember/object';

export default Controller.extend({
  error: null,
  actions: {
    // @TODO: refactor/standardize error validation
    validate() {
      this.set('error', false);
      // enabled submit button
      Ember.$(':submit').removeAttr('disabled');
    },
    // @TODO: refactor/standardize error validation
    invalidate(e, imgSrc) {
      if (e == 'ERROR_HD_INAVAILABLE') {
        this.set('error', true);
        // disable submit button
        Ember.$(':submit').attr('disabled', 'disabled');
      }
    }
  }
});