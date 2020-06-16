const express = require('express')
var router = express.Router()
const Usuario = require("../domain/usuario-domain")
const UsuarioService = require("../services/usuario-service")
var usuarioService = new UsuarioService()

//Create Retrieve Update Delete 
router.get("/usuario", (req, res) => {
  let todos = usuarioService.buscarTodos()
  // console.log(todos)
  res.json(todos)
})
router.post("/usuario", (req, res) => {

  let usuario = new Usuario(req.body.email, req.body.nome, req.body.senha, req.requestTime);
  usuarioService.adicionar(usuario)
  res.json(usuario)
})

router.put("/usuario", (req, res) => {

  usuarioService.alterar(req.body)
  res.send('Alterado')

})
router.delete("/usuario/", async (req, res) => {
  let ex = await usuarioService.excluir(req.body.email)
  res.send("Excluido")
})

module.exports = router