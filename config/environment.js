'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'igottalent-webapp',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'facebook-oauth2': {
          apiKey: "1812832325605603",
          // TODO @DepOps: user env variable that follows environment settings
          redirectUri: "http://localhost:4200/torii/redirect.html",
          tokenExchangeUri: "http://localhost:3000/token"
        }
      }
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    // backend oauth2 token exchange
    ENV.APP.host = 'http://localhost:3000';
    // frontend oauth2 redirect
    ENV.torii.providers['facebook-oauth2'].tokenExchangeUri = 'http://localhost:3000/token';
    // backend host
    ENV.torii.providers['facebook-oauth2'].redirectUri = "http://localhost:4200/torii/redirect.html";
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    // backend oauth2 token exchange
    ENV.torii.providers['facebook-oauth2'].tokenExchangeUri = "https://cryptic-citadel-65071.herokuapp.com/token";
    // frontend oauth2 redirect
    ENV.torii.providers['facebook-oauth2'].redirectUri = "https://frozen-mesa-62725.herokuapp.com/torii/redirect.html";
    // backend host
    ENV.APP.host = "https://young-shelf-10460.herokuapp.com";
  }

  return ENV;
};
