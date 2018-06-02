import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  facebookId: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  admin: DS.attr('boolean'),
  videos: DS.hasMany('video')
});
