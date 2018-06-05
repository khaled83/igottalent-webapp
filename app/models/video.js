import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  genre: DS.attr('string'),
  url: DS.attr('string'),
  videoId: DS.attr('string'),
  approvedAdmin: DS.attr('boolean'),
  approvedUser: DS.attr('boolean'),
  live: DS.attr('boolean'),
  
  // ASSOCIATIONS //
  user: DS.belongsTo('user')
  
  //=== COMPUTED PROPERTIES ===
  
});
