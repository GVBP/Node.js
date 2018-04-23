//O método fs.writeFile() substitui o arquivo e o conteudo especificados:
var fs = require('fs');

//Substitui um arquivo por um novo:
fs.writeFile('mynewfile3.txt', 'This is my text', function(err) {
    if(err) throw err;
    console.log('Replaced!');
});