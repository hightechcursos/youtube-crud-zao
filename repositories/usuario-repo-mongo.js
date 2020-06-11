const mongoose = require("mongoose") 
const UsuarioModel = require("../model/usuario-model")

class UsuarioRepositoryMongo{

    constructor(){
        this.model =  UsuarioModel
    }

    adicionar(usuario){
        this.model.create(usuario, function (err, suc){
            if (err) return handleError(err);
            console.log("Usuario Salvo")
        })
    }

    excluir (email){
        

    }

    alterar(usuario){
       
        
    }

    buscar(usuario){

    }

    buscarTodos(){
       
    }

}

module.exports = UsuarioRepositoryMongo