"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _usuarioDomain = _interopRequireDefault(require("../domain/usuario-domain"));

//Definindo o modelo (estrutura da collection)
var UsuarioSchema = _mongoose["default"].Schema({
  email: String,
  nome: String,
  senha: String,
  dataCadastro: Date
}); //Objeto que contem os dados


UsuarioSchema.loadClass(_usuarioDomain["default"]);
module.exports = _mongoose["default"].model('Usuario', UsuarioSchema);