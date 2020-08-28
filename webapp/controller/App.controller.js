sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("ui5-pwa.controller.App", {
    onInit: function () {
      this.resetNewTodo();
    },

    addNewTodo: function () {
      const oNewTodo = this.getNewTodo();
      this.addTodo(oNewTodo);
      this.resetNewTodo();

    },

    addTodo: function (oTodo) {
      const oTodoModel = this.getView().getModel("todos");
      const aTodos = oTodoModel.getData();
      aTodos.push(oTodo);
      oTodoModel.setData(aTodos);
      if (localStorage) {
        localStorage.setItem("todos", JSON.stringify(aTodos));
      }
    },

    resetNewTodo: function () {
      this.getView().getModel("newTodo").setData({
        text: "",
        checked: false
      });
    },

    getNewTodo: function () {
      return this.getView().getModel("newTodo").getData();
    }
  });
});