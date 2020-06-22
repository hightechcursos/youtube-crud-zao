"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _usuarioService = _interopRequireDefault(require("../services/usuario-service"));

var Usuario = require("../domain/usuario-domain");

var UsuarioController = /*#__PURE__*/function () {
  function UsuarioController() {
    (0, _classCallCheck2["default"])(this, UsuarioController);
    this.usuarioService = new _usuarioService["default"]();
  }

  (0, _createClass2["default"])(UsuarioController, [{
    key: "adicionar",
    value: function adicionar(req, res) {
      var usuario = new Usuario(req.body.email, req.body.nome, req.body.senha, req.requestTime);
      this.usuarioService.adicionar(usuario);
      res.json(usuario);
    }
  }, {
    key: "excluir",
    value: function () {
      var _excluir = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.usuarioService.excluir(req.body.email);

              case 2:
                res.send("Excluido");

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function excluir(_x, _x2) {
        return _excluir.apply(this, arguments);
      }

      return excluir;
    }()
  }, {
    key: "alterar",
    value: function () {
      var _alterar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.usuarioService.alterar(req.body);

              case 2:
                res.send('Alterado');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function alterar(_x3, _x4) {
        return _alterar.apply(this, arguments);
      }

      return alterar;
    }()
  }, {
    key: "buscarTodos",
    value: function () {
      var _buscarTodos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var usuarios;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.usuarioService.buscarTodos();

              case 2:
                usuarios = _context3.sent;
                console.log(usuarios);
                res.json(usuarios);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function buscarTodos(_x5, _x6) {
        return _buscarTodos.apply(this, arguments);
      }

      return buscarTodos;
    }()
  }]);
  return UsuarioController;
}();

module.exports = UsuarioController;