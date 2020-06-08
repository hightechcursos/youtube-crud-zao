const mongoose =  require("mongoose")
const UsuarioModel =  require("../model/usuario-model")

class UsuarioRepositoryMongo {

    constructor(){
        this.model =  UsuarioModel;
    }

     adicionar(usuario){
        
       const doc= new this.model(usuario)
       doc.super.save()

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