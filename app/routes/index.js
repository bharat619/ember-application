import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  // The beforeModel hook gets executed before the data gets
  // fetched from the model hook, and before the page is
  // rendered
  beforeModel() {
    this.replaceWith("rentals");
  }
}
