const express = require('express')
const app = express()
const port= process.env.PORT || 3000
const path =  require("path")
const usuarioRoutes = require("./routes/usuario-routes")
const mongoose =  require ("mongoose")


app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(usuarioRoutes)


app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
  })


//Conexao com Banco
mongoose.connect('mongodb+srv://user_app:VgPzXxUes6qLmI2s@cluster0-oh8l4.mongodb.net/escola?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

  console.log("CONECTADO")
});