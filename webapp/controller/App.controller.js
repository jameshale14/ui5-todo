sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox"
], function (Controller, MessageBox) {
  "use strict";
  return Controller.extend("ui5-pwa.controller.App", {
    onShowHello: function () {
      // show a native JavaScript alert
      MessageBox.show(
        "Hello world", {
        icon: MessageBox.Icon.INFORMATION,
        title: "My message box title",
        // actions: [MessageBox.Action.YES, MessageBox.Action.NO],
        // emphasizedAction: MessageBox.Action.YES,
        onClose: function (oAction) { / * do something * / }
      }
      );
    }
  });
});