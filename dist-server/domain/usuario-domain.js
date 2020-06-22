"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

module.exports = function Usuario(email, nome, senha, dataCadastro) {
  (0, _classCallCheck2["default"])(this, Usuario);
  this.email = email;
  this.nome = nome;
  this.senha = senha;
  this.dataCadastro = dataCadastro;
};