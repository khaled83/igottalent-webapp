import ApplicationAdapter from './application';
import ENV from '../config/environment';

export default ApplicationAdapter.extend({
  host: ENV.APP.host,

  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;
      return `${this._super(...arguments)}/me`;
    }

    return this._super(...arguments);
  }
});
