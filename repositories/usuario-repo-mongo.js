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

    alterar(usuario) {

        let u = this.model.findOne({
            email: usuario.email
        }).exec()

        u.then((usu) => {
            this.model.updateOne(usu, usuario).exec()
        })



    }

    buscar(usuario) {

        return this.model.find({
            usuario
        })
    }
    buscarTodos() {
        const result = this.model.find({})
        return result.lean().exec()
        //  return  this.model.find({})

    }
}

module.exports = UsuarioRepositoryMongo;