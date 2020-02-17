import JSONAPIAdapter from "@ember-data/adapter/json-api";
import DS from "ember-data";

export default DS.JSONAPIAdapter.extend({
  namespace: "api"
});
