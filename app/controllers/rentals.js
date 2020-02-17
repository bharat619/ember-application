import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param != "") {
        return this.get("store")
          .query("rental", { city: param })
          .then(data => {
            return { query: param, results: data };
          });
      } else {
        return this.get("store")
          .findAll("rental")
          .then(data => {
            return { query: param, results: data };
          });
      }
    }
  }
});
