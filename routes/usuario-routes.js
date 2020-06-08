const express = require('express')
var router = express.Router()
const Usuario =  require("../models/usuario")
const UsuarioService =  require("../services/usuario-service")
var usuarioService = new UsuarioService()

//Create Retrieve Update Delete 
router.get("/usuario", (req, res)=> {
  res.json(usuarioService.buscarTodos())
})
router.post("/usuario", (req, res)=> {
  
  let usuario = new Usuario(req.body.email, req.body.nome,  req.body.senha,req.requestTime);
  usuarioService.adicionar(usuario)
  res.json(usuario)
})

router.put("/usuario", (req, res)=>{
 
  usuarioService.alterar(req.body)
  res.send('Alterado')

})
router.delete("/usuario/", (req, res)=>{
  usuarioService.excluir(req.body.email)
  res.send("Excluido")
})

module.exports =  router
