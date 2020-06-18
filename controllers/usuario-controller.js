const UsuarioService = require("../services/usuario-service")
const Usuario = require("../domain/usuario-domain")

class UsuarioController {

    constructor() {

        this.usuarioService = new UsuarioService()

        // this.buscarTodos = async (req, res) => {
        //     let todos = await this.usuarioService.buscarTodos()
        //     res.json(todos)
        // }

    }

    async adicionar(req, res) {

        let usuario = new Usuario(req.body.email, req.body.nome, req.body.senha, req.requestTime);
        this.usuarioService.adicionar(usuario)
        res.json(usuario)

    }

    async excluir(req, res) {

        let ex = await this.usuarioService.excluir(req.body.email)
        res.send("Excluido")

    }

    async alterar(req, res) {

        await this.usuarioService.alterar(req.body)
        res.send('Alterado')

    }


    async buscarTodos(req, res) {
        let todos = await this.usuarioService.buscarTodos()
        res.json(todos)
    }
}
module.exports = UsuarioController