import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  genre: DS.attr('string'),
  url: DS.attr('string'),
//  user: DS.belongsTo('user')
});
