import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import { inject as service } from '@ember/service';
import config from '../config/environment';

export default ToriiAuthenticator.extend({
  torii: service(),
  ajax: service(),

  authenticate() {
    const ajax = this.get('ajax');
    const tokenExchangeUri = config.torii.providers['facebook-oauth2'].tokenExchangeUri;

    return this._super(...arguments).then((data) => {
      return ajax.request(tokenExchangeUri, {
        type: 'POST',
        crossDomain: true,
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
          code: data.authorizationCode
        })
      }).then( (response) => {
        return {
          access_token: response.access_token,
          provider: data.provider
        };
      });
    });
  }
});
