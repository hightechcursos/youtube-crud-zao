const mongoose =  require("mongoose")
const Usuario =  require("../domain/usuario-domain")
module.exports  = class UsuarioSchema  extends mongoose.Schema{

    constructor(){
        super({
            email: String ,
            nome : String,
            senha: String,
            dataCadastro: Date   
        })


        this.loadClass(Usuario)
        
    }
}