//O método fs.writeFile() substitui e o conteudo especificado, se existirem. Se o arquivo não
//existir, um novo arquivo, contendo o conteudo especificado, será criado:
var fs = require('fs');

fs.writeFile('mynewile3.txt', 'Hello content!', function(err) {
    if(err) throw err;
    console.log('Saved!');
});