import Server  from "./server.js"
import ManageDB from "./db/ManageDB.js"

class App{

    start(){
        //Conexao com banco
        ManageDB.connect()

        //Server 
        new Server().start()
    }

}

new App().start();
