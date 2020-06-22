"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var UsuarioRepositoryArray = /*#__PURE__*/function () {
  function UsuarioRepositoryArray() {
    (0, _classCallCheck2["default"])(this, UsuarioRepositoryArray);
    this.usuarios = [];
  }

  (0, _createClass2["default"])(UsuarioRepositoryArray, [{
    key: "adicionar",
    value: function adicionar(usuario) {
      this.usuarios.push(usuario);
    }
  }, {
    key: "excluir",
    value: function excluir(email) {
      //localizar no array o indice
      var i = this.usuarios.findIndex(function (o) {
        return o.email == email;
      }); //splice

      this.usuarios.splice(i, 1);
    }
  }, {
    key: "alterar",
    value: function alterar(usuario) {
      this.usuarios.forEach(function (o) {
        if (o.email == usuario.email) {
          o.senha = usuario.senha ? usuario.senha : o.senha;
          o.nome = usuario.nome ? usuario.nome : o.nome;
        }
      });
    }
  }, {
    key: "buscar",
    value: function buscar(usuario) {}
  }, {
    key: "buscarTodos",
    value: function buscarTodos() {
      return this.usuarios;
    }
  }]);
  return UsuarioRepositoryArray;
}();

module.exports = UsuarioRepositoryArray;