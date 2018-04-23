//Essa configuração irá converter a saída "Hello World!" em letras maiúsculas:
var http = require('http');
var uc = require('upper-case');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //Use nosso modulo upper-case para cadeia em maiúsculas:
    res.write(uc("Hello World!"));
    res.end();
}).listen(8080);