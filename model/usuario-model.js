const mongoose = require("mongoose")
const Usuario = require("../domain/usuario-domain")
const UsuarioSchema = mongoose.Schema({
    email: String,
    nome: String,
    senha: String,
    dataCadastro: Date
})

//indexes
// UsuarioSchema.index({
//     email: 1
// })
//Load 
UsuarioSchema.loadClass(Usuario)

module.exports = mongoose.model("Usuario", UsuarioSchema)