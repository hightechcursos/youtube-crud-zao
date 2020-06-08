const express = require('express')
const app = express()
const port= process.env.PORT || 3000
const path =  require("path")
const usuarioRoutes = require("./routes/usuario-routes")


var mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://admin:Gjzo2Htm5xJzAeyc@cluster0-oh8l4.mongodb.net/escola?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        keepAlive:1,
        useCreateIndex:true,
        useUndefinedTopology:true,
        connectTimeout:3000
    });



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Conectado com sucesso no Mongo")
});

app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(usuarioRoutes)


app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
  })