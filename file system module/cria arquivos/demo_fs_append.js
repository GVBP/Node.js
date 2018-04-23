//O método fs.writeFile() anexa o conteudo especificado em um arquivo. Se o arquivo não existir,
//o arquivo será criado:
var fs = require('fs');

//Cria um arquivo nomeado mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
    if(err) throw err;
    console.log('Saved!');
});