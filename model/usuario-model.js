const mongoose = require("mongoose")
const Usuario = require("../domain/usuario-domain")
const UsuarioSchema = mongoose.Schema({
    email: String,
    nome: String,
    senha: String,
    dataCadastro: Date
})

UsuarioSchema.loadClass(Usuario)

module.exports = mongoose.model("Usuario", UsuarioSchema)