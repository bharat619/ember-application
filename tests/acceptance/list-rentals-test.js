import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | list rentals", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /", async function(assert) {
    // await visit('/');
    await visit("/");

    assert.equal(currentURL(), "/");
  });
});
