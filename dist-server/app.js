"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _server = _interopRequireDefault(require("./server"));

var _ManageDB = _interopRequireDefault(require("./db/ManageDB"));

var App = /*#__PURE__*/function () {
  function App() {
    (0, _classCallCheck2["default"])(this, App);
  }

  (0, _createClass2["default"])(App, [{
    key: "start",
    value: function start() {
      //Conexao com banco 
      _ManageDB["default"].connect(); //Server


      new _server["default"]().start();
    }
  }]);
  return App;
}();

new App().start();