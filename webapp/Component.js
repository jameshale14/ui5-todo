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
      // set data model
      var oData = {
        recipient: {
          name: "World"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);
    }
  });
});