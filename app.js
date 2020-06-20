const Server  = require("./server")
const ManageDB = require("./db/ManageDB")

class App{

    start(){
        //Conexao com banco
        ManageDB.connect()

        //Server 
        new Server().start()
    }

}

new App().start();
