// const Server  = require("./server")
import ManageDB from "./db/ManageDB";
import Server from "./server.mjs";
class App {
  start() {
    //Conexao com banco
    ManageDB.connect();

    //Server
    new Server().start();
  }
}

new App().start();