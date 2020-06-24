import UsuarioRepoArray from "../repositories/usuario-repo-array.js"

import UsuarioRepoMongo from "../repositories/usuario-repo-mongo.js"

class UsuarioService {

    constructor() {

        this.usuarioRepository = new UsuarioRepoMongo()
    }

    adicionar(usuario) {
        this.usuarioRepository.adicionar(usuario)
    }

    excluir(email) {
        this.usuarioRepository.excluir(email)
    }

    alterar(usuario) {
        this.usuarioRepository.alterar(usuario)
    }


    buscarTodos() {
        return this.usuarioRepository.buscarTodos()
    }

}

export default UsuarioService