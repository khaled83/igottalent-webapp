import FacebookOAuth2Provider from 'torii/providers/facebook-oauth2';

export default FacebookOAuth2Provider.extend({
  fetch(data) {
    return data;
  }
});