var http = require('http');

//Cria um objeto servidor:
http.createServer(function(req, res) { //Método executado quando alguém tentar acessar o computador na porta 8080
    res.write('Hello World!'); //Escreva uma resposta para o cliente
    res.end(); //Finaliza a resposta
}).listen(8080); //O objeto servidor ouve a porta 8080