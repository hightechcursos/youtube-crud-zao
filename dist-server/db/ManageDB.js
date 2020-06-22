"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var ManageDB = /*#__PURE__*/function () {
  function ManageDB() {
    (0, _classCallCheck2["default"])(this, ManageDB);
  }

  (0, _createClass2["default"])(ManageDB, null, [{
    key: "connect",
    value: function () {
      var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _mongoose["default"].connect('mongodb+srv://user_app:VgPzXxUes6qLmI2s@cluster0-oh8l4.mongodb.net/escola?retryWrites=true&w=majority', {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                  useFindAndModify: false
                })["catch"](function (err) {
                  console.log("erro na conexao ".concat(err));
                });

              case 2:
                console.log("Conectado no MongoDB");

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _mongoose["default"].connection.close()["catch"](function (err) {
                  console.log("erro ao fechar o banco ".concat(err));
                });

              case 2:
                console.log("Banco fechado com sucesso");

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }]);
  return ManageDB;
}();

module.exports = ManageDB;