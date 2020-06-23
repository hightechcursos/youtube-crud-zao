
import UsuarioService from "../services/usuario-service"
import Usuario from "../domain/usuario-domain"

class UsuarioController {

    constructor() {
        this.usuarioService = new UsuarioService()
    }

    adicionar(req, res) {

        let usuario = new Usuario(req.body.email, req.body.nome, req.body.senha, req.requestTime);
        this.usuarioService.adicionar(usuario)
        res.json(usuario)
    }



    async excluir(req, res) {
        await this.usuarioService.excluir(req.body.email)
        res.send("Excluido")
    }



    async alterar(req, res) {

        await this.usuarioService.alterar(req.body)
        res.send('Alterado')

    }


    async buscarTodos(req, res) {
        const usuarios = await this.usuarioService.buscarTodos();
        console.log(usuarios)
        res.json(usuarios)
    }
}

export default UsuarioController