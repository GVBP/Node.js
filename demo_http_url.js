var http = require('http');
http.createServer(function(req, res) { //Argumento que representa o pedido do cliente
    res.writeHead(200, {'Conten-Type': 'text-html'});
    res.write(req.url); //Argumento que contem parte da url: grava apenas a consulta exceto o dominio
    res.end();
}).listen(8080);