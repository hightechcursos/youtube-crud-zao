const mongoose =  require("mongoose")

module.exports  = class UsuarioSchema  extends mongoose.Schema{

    constructor(){
        super({
            email: String ,
            nome : String,
            senha: String,
            dataCadastro: Date   
        })
        
    }
}