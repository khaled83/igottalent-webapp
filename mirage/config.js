export default function() {
this.get('/LeaderboardEntries');
this.get('/LeaderboardEntries/:id');
this.post('/LeaderboardEntries');
this.del('/LeaderboardEntries/:id');
this.patch('/LeaderboardEntries/:id');
this.get('/videos');
this.get('/videos/:id');
this.post('/videos');
this.del('/videos/:id');
this.patch('/videos/:id');
this.get('/Videos');
this.get('/Videos/:id');
this.post('/Videos');
this.del('/Videos/:id');
this.patch('/Videos/:id');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
