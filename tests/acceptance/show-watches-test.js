import { test } from 'qunit';
import moduleForAcceptance from 'show-watcher/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | show-watches');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should show list-watches as the home page', function (assert) {
	visit('/');
  	andThen(function() {
    assert.equal(currentURL(), '/shows', 'should redirect automatically');
  });
});

test('should link to information about the company.', function (assert) {
	visit('/');
  	click('a:contains("About")');
  	andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information.', function (assert) {
	visit('/');
  	click('a:contains("Contact")');
  	andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should list available show-rentals.', function (assert) {
	visit('/');
  	andThen(function() {
    assert.equal(find('.showlisting').length, 3, 'should see 3 listings');
  });
});

test('should filter the list of show-rentals by name of show.', function (assert) {
});

test('should show details for a selected show-rental', function (assert) {
});
