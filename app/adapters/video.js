import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'http://localhost:3000',
  
  urlForQuery (query) {
    if (query.filter) {
      delete query.filter;
      return this._super(...arguments) + '/unauthorized';
    }
    
    return this._super(...arguments);
  }
});
