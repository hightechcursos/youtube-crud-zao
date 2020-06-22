import Server from "./server";
import ManageDB from "./db/ManageDB";

class App {
  start() {
    //Conexao com banco 
    ManageDB.connect();

    //Server
    new Server().start();
  }
}

new App().start();