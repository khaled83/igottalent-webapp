import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  genre: DS.attr('string'),
  url: DS.attr('string'),
  approved: DS.attr('boolean')
//  user: DS.belongsTo('user')
});
