sap.ui.define([
  "todo/controller/BaseController"
], function (BaseController) {
  "use strict";
  return BaseController.extend("todo.controller.Todos", {
    onInit: function () {
      this.getRouter().getRoute("todo").attachMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function (oEvent) {
      const sIndex = oEvent.getParameter("arguments").todoid;
      const oTodo = this.getView().getModel("todos").getProperty(`/${sIndex}`);
      this.getView().getModel("todo").setData(oTodo);
    }
  });
});