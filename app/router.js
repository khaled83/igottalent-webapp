import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('videos', function() {
    this.route('index');
    this.route('new');

    this.route('edit', {
      path: ':video_id/edit'
    });

    this.route('show', {
      path: ':video_id'
    });
    this.route('index-admin');
  });
  this.route('LeaderboardEntries', function() {
  });
});

export default Router;
