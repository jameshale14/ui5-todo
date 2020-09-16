sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("todo.controller.App", {
    onInit: function () {
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
      this.saveTodosToLocalStorage(aTodos);
    },

    setDone: function () {
      const aTodos = this.getView().getModel("todos").getData();
      this.saveTodosToLocalStorage(aTodos);
    },

    saveTodosToLocalStorage: function (aTodos) {
      if (localStorage) {
        localStorage.setItem("todos", JSON.stringify(aTodos));
      }
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