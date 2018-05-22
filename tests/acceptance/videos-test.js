import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Video', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /videos without data', function(assert) {
  visit('/videos');

  andThen(function() {
    assert.equal(currentPath(), 'videos.index');
    assert.equal(find('#blankslate').text().trim(), 'No Videos found');
  });
});

test('visiting /videos with data', function(assert) {
  server.create('video');
  visit('/videos');

  andThen(function() {
    assert.equal(currentPath(), 'videos.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new video', function(assert) {
  visit('/videos');
  click('a:contains(New Video)');

  andThen(function() {
    assert.equal(currentPath(), 'videos.new');

    fillIn('label:contains(Title) input', 'MyString');
    fillIn('label:contains(Genre) input', 'MyString');
    fillIn('label:contains(Url) input', 'MyString');
    fillIn('label:contains(User) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing video', function(assert) {
  server.create('video');
  visit('/videos');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'videos.edit');

    fillIn('label:contains(Title) input', 'MyString');
    fillIn('label:contains(Genre) input', 'MyString');
    fillIn('label:contains(Url) input', 'MyString');
    fillIn('label:contains(User) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing video', function(assert) {
  server.create('video');
  visit('/videos');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'videos.show');

    assert.equal(find('p strong:contains(Title:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Genre:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(User:)').next().text(), 'MyString');
  });
});

test('delete a video', function(assert) {
  server.create('video');
  visit('/videos');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'videos.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
