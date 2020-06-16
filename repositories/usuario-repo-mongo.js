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

    excluir(email) {

        return this.model.deleteOne({
            email: email
        });

    }

    async alterar(usuario) {

        let u = await this.model.findOne({
            email: usuario.email
        })

        return await this.model.findByIdAndUpdate(u._id, usuario, {
            new: true
        })
    }

    buscar(usuario) {

        return this.model.find({
            usuario
        })
    }
    async buscarTodos() {
        // const result = this.model.find({})
        // return result.lean().exec()
        return await this.model.find({})

    }
}

module.exports = UsuarioRepositoryMongo;