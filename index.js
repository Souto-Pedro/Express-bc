const express = require('express');

const userRoute = require('./routes/user')

const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send('Olá mundo');
});

app.listen(port, function(){
    console.log("Aplicação rodando na porta 3000.")
});
