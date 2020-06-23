import Server  from "./server.js"
import ManageDB from "./db/ManageDB"

//ES module

class App{

    start(){
        //Conexao com banco
        ManageDB.connect()

        //Server 
        new Server().start()
    }

}

new App().start();
