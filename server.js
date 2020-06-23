import express from "express"
import path from "path"
import UsuarioRoutes from "./routes/usuario-routes"

class Server {

  constructor() {

    //configuracao do server
    this.app = express()
    this.usuarioRoutes =  new UsuarioRoutes()

  }

 
    start(){
       //express middlewares
      this.app.use(express.json())
      this.app.use(express.static(path.join(__dirname, 'public')))
      this.app.use(this.usuarioRoutes.router)

      //config da porta
      const port = process.env.PORT || 3000
      this.app.listen(port, function () {
        console.log(`Server iniciado na http://localhost:${port}/`);
      })
    }
  
}

export default Server


