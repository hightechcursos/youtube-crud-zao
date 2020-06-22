"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var express = require("express");

var path = require("path");

var UsuarioRoutes = require("./routes/usuario-routes");

var Server = /*#__PURE__*/function () {
  function Server() {
    (0, _classCallCheck2["default"])(this, Server);
    //configuracao do server
    this.app = express();
    this.usuarioRoutes = new UsuarioRoutes();
  }

  (0, _createClass2["default"])(Server, [{
    key: "start",
    value: function start() {
      //express middlewares
      this.app.use(express.json());
      this.app.use(express["static"](path.join(__dirname, "../public")));
      this.app.use(this.usuarioRoutes.router); //config da porta

      var port = process.env.PORT || 3000;
      this.app.listen(port, function () {
        console.log("Server iniciado na http://localhost:".concat(port, "/"));
      });
    }
  }]);
  return Server;
}();

module.exports = Server;