// const Server  = require("./server")
import ManageDB from "./db/ManageDB.js";
import Server from "./server.js";
class App {
  start() {
    //Conexao com banco
    ManageDB.connect();

    //Server
    new Server().start();
  }
}

new App().start();
