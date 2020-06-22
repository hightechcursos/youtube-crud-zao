"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var UsuarioRepoArray = require("../repositories/usuario-repo-array");

var UsuarioRepoMongo = require("../repositories/usuario-repo-mongo");

var UsuarioService = /*#__PURE__*/function () {
  function UsuarioService() {
    (0, _classCallCheck2["default"])(this, UsuarioService);
    this.usuarioRepository = new UsuarioRepoMongo();
  }

  (0, _createClass2["default"])(UsuarioService, [{
    key: "adicionar",
    value: function adicionar(usuario) {
      this.usuarioRepository.adicionar(usuario);
    }
  }, {
    key: "excluir",
    value: function excluir(email) {
      this.usuarioRepository.excluir(email);
    }
  }, {
    key: "alterar",
    value: function alterar(usuario) {
      this.usuarioRepository.alterar(usuario);
    }
  }, {
    key: "buscarTodos",
    value: function buscarTodos() {
      return this.usuarioRepository.buscarTodos();
    }
  }]);
  return UsuarioService;
}();

module.exports = UsuarioService;