
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('watch-status-type', 'helper:watch-status-type', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{watch-status-type inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

