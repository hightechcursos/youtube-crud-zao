const express = require('express')

const Usuario = require("../domain/usuario-domain")
const UsuarioService = require("../services/usuario-service")
const UsuarioController = require("../controllers/usuario-controller")


// var usuarioService = new UsuarioService()


class UsuarioRoutes {

    constructor() {
        this.usuarioController = new UsuarioController()
        this.router = express.Router()
        this.loadRoutes()
    }

    loadRoutes() {
        // OK 

        this.router.get("/usuario", this.usuarioController.buscarTodos.bind(this.usuarioController))

        //OK

        // this.router.get("/usuario", (req, res) => {
        //     this.usuarioController.buscarTodos(req, res)
        // })

        //UNDEFINED 
        // this.router.get("/usuario", function (req, res) {
        //     this.usuarioController.buscarTodos(req, res)
        // })

        //Create Retrieve Update Delete 
        // router.get("/usuario", async (req, res) => {
        //     let todos = await usuarioService.buscarTodos()
        //     // console.log(todos)
        //     res.json(todos)
        // })
        // this.router.post("/usuario", (req, res) => {

        //     let usuario = new Usuario(req.body.email, req.body.nome, req.body.senha, req.requestTime);
        //     usuarioService.adicionar(usuario)
        //     res.json(usuario)
        // })

        // this.router.put("/usuario", async (req, res) => {

        //     await usuarioService.alterar(req.body)
        //     res.send('Alterado')

        // })
        // this.router.delete("/usuario/", async (req, res) => {
        //     let ex = await usuarioService.excluir(req.body.email)
        //     res.send("Excluido")
        // })

    }

}

module.exports = new UsuarioRoutes().router