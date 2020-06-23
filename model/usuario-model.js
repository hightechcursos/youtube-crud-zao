import mongoose from "mongoose";
import Usuario from "../domain/usuario-domain"
//Definindo o modelo (estrutura da collection)
const UsuarioSchema = mongoose.Schema(
    { 
        email:String, 
        nome:String ,
        senha:String, 
        dataCadastro:Date 
    }
)
//Objeto que contem os dados
UsuarioSchema.loadClass(Usuario)
export default  mongoose.model('Usuario',UsuarioSchema );
