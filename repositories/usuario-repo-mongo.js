const mongoose =  require("mongoose")
const UsuarioSchema =  require("../schemas/usuarioSchema")

class UsuarioRepositoryMongo  extends mongoose.model{

    constructor(){
       super("Usuario", new UsuarioSchema())
    }

   async adicionar(usuario){
        console.log(usuario)
       // await  this.create(usuario)
    }

    excluir (email){
        
    }

    alterar(usuario){
       
        
    }

    buscar(usuario){

    }

    buscarTodos(){
        return ""
    }

}

module.exports = UsuarioRepositoryMongo