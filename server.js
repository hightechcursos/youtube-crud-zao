const express = require('express')
const app = express()
const port= process.env.PORT || 3000
const path =  require("path")


// app.get("/", (req,res)=>{
//     const home =  path.join(__dirname,'public','home.html');
//     res.sendFile(home)
// })

app.use(express.static(path.join(__dirname,'public')))
//Create Retrieve Update Delete 
app.get("/usuario", (req, res)=> res.send('Chamou pelo GET'))
app.post("/usuario", (req, res)=> res.send('Chamou pelo POST'))
app.put("/usuario", (req, res)=>res.send('Chamou pelo PUT'))
app.delete("/usuario", (req, res)=>res.send('Chamou pelo DELETE'))

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
  })