import Component from '@ember/component';

export default Component.extend({
  classNames: ['d-inline-block'],
  actions: {
    toggleApproved: function(model, propertyName) {
      model.toggleProperty(propertyName);
      const router = this;
      model.save().then(function() {
      }, function() {
        router.get('flashMessages').danger('Failed to save video!');
        model.rollbackAttributes();
      });
    },
    remove: function(model) {
      this.sendAction("remove", model);
    }
  }
});
