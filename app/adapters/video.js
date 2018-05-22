import DS from 'ember-data';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'http://localhost:3000'
});
