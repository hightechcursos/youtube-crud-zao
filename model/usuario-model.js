
const mongoose = require('mongoose');
const Usuario =  require('../domain/usuario-domain')
//Definindo o modelo (estrutura da collection)
const UsuarioSchema = mongoose.Schema(
    { 
        email:String, 
        nome:String ,
        senha:String, 
        dataCadastro:Date 
    }
)
//Objeto que contem os dados
UsuarioSchema.loadClass(Usuario)
module.exports = mongoose.model('Usuario',UsuarioSchema );
