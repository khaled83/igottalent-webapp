import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  score: DS.attr('number'),
  rank: DS.attr('number'),
  
  // ASSOCIATIONS //
  user: DS.belongsTo('user')
});
