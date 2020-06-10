const mongoose = require("mongoose");
const UsuarioModel = require("../model/usuario-model");

class UsuarioRepositoryMongo {
    constructor() {
        this.model = UsuarioModel;
    }

    async adicionar(usuario) {
        //const doc = new this.model(usuario);

        await this.model.create(usuario);
        console.log("Usuário Salvo");
    }

    async excluir(email) {

        await this.model.deleteOne({
            email: email
        });
        console.log("Deletado");
    }

    async alterar(usuario) {

        let u = await this.model.findOne({
            email: usuario.email
        })

        return await this.model.findByIdAndUpdate(u._id, usuario, {
            new: true
        })
    }

    buscar(usuario) {}

    buscarTodos() {
        return "";
    }
}

module.exports = UsuarioRepositoryMongo;