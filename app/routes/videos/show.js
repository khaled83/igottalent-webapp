import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
//      debugger
//      $().$(location).attr('href');
      // solves a problem that FB social doesn't appear without page relaod
      window.FB.init({
        appId      : '1812832325605603',
        status     : true,
        xfbml      : true,
        version    : 'v3.0' // or v2.7, v2.6, v2.5, v2.4, v2.3
      });
    }
  }
});
