"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var mongoose = require("mongoose");

var UsuarioModel = require("../model/usuario-model");

var UsuarioRepositoryMongo = /*#__PURE__*/function () {
  function UsuarioRepositoryMongo() {
    (0, _classCallCheck2["default"])(this, UsuarioRepositoryMongo);
    this.model = UsuarioModel;
  }

  (0, _createClass2["default"])(UsuarioRepositoryMongo, [{
    key: "adicionar",
    value: function adicionar(usuario) {
      this.model.create(usuario, function (err, suc) {
        if (err) return handleError(err);
        console.log("Usuario Salvo");
      });
    }
  }, {
    key: "excluir",
    value: function excluir(email) {
      var query = this.model.deleteOne({
        email: email
      });
      query.exec();
    }
  }, {
    key: "alterar",
    value: function alterar(usuario) {
      var query = {
        email: usuario.email
      };
      this.model.findOneAndUpdate(query, usuario).exec();
    }
  }, {
    key: "buscar",
    value: function buscar(usuario) {}
  }, {
    key: "buscarTodos",
    value: function buscarTodos() {
      var query = this.model.find({});
      var promise = query.lean().exec();
      return promise;
    }
  }]);
  return UsuarioRepositoryMongo;
}();

module.exports = UsuarioRepositoryMongo;