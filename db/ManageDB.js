import  mongoose from "mongoose"

class ManageDB{

   static async connect(){
            //Conexao com Banco
            await mongoose.connect('mongodb+srv://user_app:VgPzXxUes6qLmI2s@cluster0-oh8l4.mongodb.net/escola?retryWrites=true&w=majority', 
            {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).catch((err)=>{
                console.log(`erro na conexao ${err}`)
            });    
            console.log("Conectado no MongoDB")
            
    }
    static async close(){
        await mongoose.connection.close().catch(err=>{
            console.log(`erro ao fechar o banco ${err}`)
        })

        console.log("Banco fechado com sucesso")
    }
}

export default ManageDB