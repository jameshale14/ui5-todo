sap.ui.define([
  "sap/ui/core/ComponentSupport",
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
], function (ComponentSupport, UIComponent, JSONModel) {
  "use strict";
  return UIComponent.extend("ui5-pwa.Component", {
    metadata: {
      manifest: "json"
    },
    ComponentSupport: ComponentSupport,
    init: function () {
      // call the init function of the parent
      UIComponent.prototype.init.apply(this, arguments);

      let oTodos = [];
      if (localStorage && localStorage.getItem("todos")) {
        oTodos = JSON.parse(localStorage.getItem("todos"));
      } else {
        oTodos = [];
        localStorage.setItem("todos", JSON.stringify(oTodos));
      }
      const oModel = new JSONModel(oTodos);
      this.setModel(oModel, "todos");
    }
  });
});