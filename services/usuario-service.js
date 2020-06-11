const UsuarioRepoArray = require("../repositories/usuario-repo-array")

class UsuarioService{

    constructor(){
        //Muda
        this.usuarioRepository = new UsuarioRepoArray()
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