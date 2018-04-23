//require() Utiliza módulos
var http = require('http');
var dt = require('./myfirstmodule');

//Cria uma servidor objeto:
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //200 significa que esta tudo OK, e o segundo argumento é um objeto que contem os cabeçalhos de respostas.
    res.write("A data e hora são exatamente: " + dt.myDateTime()); //Escreve uma resposta para o cliente
    res.end(); //Finaliza a resposta
}).listen(8080); //O objeto servidor ouve a porta 8080