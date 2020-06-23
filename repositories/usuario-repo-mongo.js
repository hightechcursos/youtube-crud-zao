import UsuarioModel from "../model/usuario-model"

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
       
        const query =  this.model.deleteOne({email})
        query.exec()


    }

    alterar(usuario){
       
        const query = {email:usuario.email}
        this.model.findOneAndUpdate(query,usuario).exec()

    }

 

    buscarTodos(){
       const query =  this.model.find({})
       const promise= query.lean().exec()
       return promise
    }

}

export default UsuarioRepositoryMongo