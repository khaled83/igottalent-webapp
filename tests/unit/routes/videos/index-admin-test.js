import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | videos/index-admin', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:videos/index-admin');
    assert.ok(route);
  });
});
