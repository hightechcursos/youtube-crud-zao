var mongoose = require('mongoose');

module.exports = class ManageDB {

    static async connect() {


        await mongoose.connect(
            'mongodb+srv://admin:Gjzo2Htm5xJzAeyc@cluster0-oh8l4.mongodb.net/escola?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).catch(err => {
            console.log(err)
        });

        console.log("Conectado com sucesso no Mongo")

        // var db = mongoose.connection;
        // db.on('error', console.error.bind(console, 'connection error:'));
        // db.once('open', function () {
        //     console.log("Conectado com sucesso no Mongo")
        // });
    }

    static async close() {
        await mongoose.connection.close().catch(err => {
            console.log(err)
            process.exit(1)
        })
        console.log("banco fechado")
    }
}