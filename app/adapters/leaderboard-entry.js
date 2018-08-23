import ApplicationAdapter from './application';
import ENV from '../config/environment';

export default ApplicationAdapter.extend({
  host: ENV.APP.host
});
