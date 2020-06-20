const express = require('express')

const port = process.env.PORT || 3000
const path = require("path")
const usuarioRoutes = require("./routes/usuario-routes")
const ManageDB = require("./db/ManageDB")

class Server {

    constructor() {
        this.app = express()
    }


    start() {
        //middlewarres
        this.app.use(express.json())
        this.app.use(express.static(path.join(__dirname, 'public')))

        //Rotas
        this.app.use(usuarioRoutes)

        //porta
        this.app.listen(port, function () {
            console.log(`Server running at http://localhost:${port}/`);
        })

        //Conexao com banco

        this.conexao()


    }

    conexao() {
        ManageDB.connect()
        //ManageDB.close()
    }


}


new Server().start()