//O método fs.unlink() exclui o arquivo especificado:
var fs = require('fs');

//Deletando o arquivo mynewfile2.txt:
fs.unlink('mynewfile2.txt', function(err) {
    if(err) throw err;
    console.log('File deleted!');
});