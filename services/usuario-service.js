const UsuarioRepoArray = require("../repositories/usuario-repo-array")
const UsuarioRepoMongo = require ("../repositories/usuario-repo-mongo")
class UsuarioService{

    constructor(){
        //Muda
        this.usuarioRepository = new UsuarioRepoMongo()
    }

    adicionar(usuario){
        this.usuarioRepository.adicionar(usuario)
    }

    excluir (email){
        this.usuarioRepository.excluir(email)
    }

    alterar(usuario){
        this.usuarioRepository.alterar(usuario)
    }

    buscar(usuario){

    }

    buscarTodos(){
        return this.usuarioRepository.buscarTodos()
    }

}

module.exports = UsuarioService