sap.ui.define([
  "todo/controller/BaseController"
], function (BaseController) {
  "use strict";
  return BaseController.extend("todo.controller.Todos", {
    onInit: function () {
      this.getRouter().getRoute("todos").attachPatternMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function () {
      this.resetNewTodo();
    },

    addNewTodo: function () {
      const oNewTodo = this.getNewTodo();
      this.addTodo(oNewTodo);
      this.resetNewTodo();
    },

    addTodo: function (oTodo) {
      if (oTodo.text.substring(0, 1) === "!") {
        oTodo.important = true;
        oTodo.text = oTodo.text.substring(1);
      }
      if (oTodo.text === "") {
        return;
      }
      const oTodoModel = this.getView().getModel("todos");
      const aTodos = oTodoModel.getData();
      aTodos.push(oTodo);
      oTodoModel.setData(aTodos);
      this.getOwnerComponent.saveTodosToLocalStorage(aTodos);
    },

    setDone: function () {
      const aTodos = this.getView().getModel("todos").getData();
      this.getOwnerComponent.saveTodosToLocalStorage(aTodos);
    },

    onTodoSelect: function (oEvent) {
      const sPath = oEvent.getParameter("listItem").getBindingContextPath("todos").substring(1);
      this.getRouter().navTo("todo", { todoid: sPath });

    },

    resetNewTodo: function () {
      this.getView().getModel("newTodo").setData({
        text: "",
        checked: false,
        important: false
      });
    },

    getNewTodo: function () {
      return this.getView().getModel("newTodo").getData();
    }
  });
});