//O método fs.appendFile() acrescenta o conteudo especifico no final do arquivo especificado:
var fs = require('fs');

//Acrescenta conteúdo ao final do arquivo:
fs.appendFile('mynewfile1.txt', 'This is my text.', function(err) {
    if(err) throw err;
    console.log('Update!');
});