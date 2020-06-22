"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var express = require('express');

var UsuarioController = require("../controllers/usuario-controller");

var UsuarioRoutes = /*#__PURE__*/function () {
  function UsuarioRoutes() {
    (0, _classCallCheck2["default"])(this, UsuarioRoutes);
    this.usuarioController = new UsuarioController();
    this.router = express.Router();
    this.loadRoutes();
  }

  (0, _createClass2["default"])(UsuarioRoutes, [{
    key: "loadRoutes",
    value: function loadRoutes() {
      this.router.get("/usuario", this.usuarioController.buscarTodos.bind(this.usuarioController));
      this.router.post("/usuario", this.usuarioController.adicionar.bind(this.usuarioController));
      this.router.put("/usuario", this.usuarioController.alterar.bind(this.usuarioController));
      this.router["delete"]("/usuario/", this.usuarioController.excluir.bind(this.usuarioController));
    }
  }]);
  return UsuarioRoutes;
}();

module.exports = UsuarioRoutes;