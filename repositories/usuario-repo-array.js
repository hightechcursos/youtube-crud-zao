class UsuarioRepositoryArray{

    constructor(){
        this.usuarios =[]
    }

    adicionar(usuario){
        this.usuarios.push(usuario)
    }

    excluir (email){
        //localizar no array o indice
        let i = this.usuarios.findIndex((o)=>o.email==email)

        //splice
        this.usuarios.splice(i,1)

    }

    alterar(usuario){
        this.usuarios.forEach( (o) => {
            if (o.email==usuario.email){
               o.senha = usuario.senha ? usuario.senha: o.senha
               o.nome  = usuario.nome ? usuario.nome: o.nome     
            }
        })
        
    }

    buscar(usuario){

    }

    buscarTodos(){
        return this.usuarios;
    }

}

module.exports = UsuarioRepositoryArray