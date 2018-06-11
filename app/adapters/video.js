import ApplicationAdapter from './application';
import ENV from '../config/environment';

export default ApplicationAdapter.extend({
  host: ENV.APP.host,

  urlForQuery (query) {
    if (query.filter) {
      delete query.filter;
      return this._super(...arguments) + '/unauthorized';
    }

    return this._super(...arguments);
  }
});
