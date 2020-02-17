import Component from "@ember/component";

export default Component.extend({
  classNames: ["list-filter"],
  value: "",
  init() {
    this._super(arguments);
    this.get("filter")("").then(results =>
      this.set("results", results.results)
    );
  },
  actions: {
    handleFilterEntry() {
      let filterInput = this.get("value");
      let filterAction = this.get("filter");
      filterAction(filterInput)
        .then(filterResults => {
          if (filterResults.query == this.get("value")) {
            this.set("results", filterResults.results);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
