const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require("path")
const usuarioRoutes = require("./routes/usuario-routes")
const ManageDB = require("./db/ManageDB")

ManageDB.connect()
//ManageDB.close()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(usuarioRoutes)


app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}/`);
})