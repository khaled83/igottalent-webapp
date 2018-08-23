import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: LeaderboardEntry', {
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

test('visiting /LeaderboardEntries without data', function(assert) {
  visit('/LeaderboardEntries');

  andThen(function() {
    assert.equal(currentPath(), 'LeaderboardEntries.index');
    assert.equal(find('#blankslate').text().trim(), 'No Leaderboardentries found');
  });
});

test('visiting /LeaderboardEntries with data', function(assert) {
  server.create('LeaderboardEntry');
  visit('/LeaderboardEntries');

  andThen(function() {
    assert.equal(currentPath(), 'LeaderboardEntries.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new LeaderboardEntry', function(assert) {
  visit('/LeaderboardEntries');
  click('a:contains(New Leaderboardentry)');

  andThen(function() {
    assert.equal(currentPath(), 'LeaderboardEntries.new');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Score) input', 42);
    fillIn('label:contains(Rank) input', 42);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing LeaderboardEntry', function(assert) {
  server.create('LeaderboardEntry');
  visit('/LeaderboardEntries');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'LeaderboardEntries.edit');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Score) input', 42);
    fillIn('label:contains(Rank) input', 42);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing LeaderboardEntry', function(assert) {
  server.create('LeaderboardEntry');
  visit('/LeaderboardEntries');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'LeaderboardEntries.show');

    assert.equal(find('p strong:contains(Name:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Score:)').next().text(), 42);
    assert.equal(find('p strong:contains(Rank:)').next().text(), 42);
  });
});

test('delete a LeaderboardEntry', function(assert) {
  server.create('LeaderboardEntry');
  visit('/LeaderboardEntries');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'LeaderboardEntries.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
