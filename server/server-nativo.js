const http = require('http'); 
const fs = require("fs")
const path =  require("path")

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
 
  if (req.url==="/api/bananas"){
   
    res.end(JSON.stringify({titulo:'Bananas', img:'https://media.giphy.com/media/1uPiL9Amv5zkk/giphy.gif'}) )
  }else if (req.url==="/"){
   //Carregar o HTML?

    const home =  path.join(__dirname,'public','home.html');
    fs.readFile(home, 'utf8', (err, data) => {
        if (err) throw err;
        //console.log(data);
        res.end(data)
      });

  }else{
    const file =  path.join(__dirname,'public',req.url);
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) console.dir(err);
      //console.log(data);
      res.end(data)
    });

  }
  
  
   
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});