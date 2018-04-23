//O método fs.open() recebe um "sinalizador" como o segundo argumento, se o sinalizador for "w"
//para "gravar", o arquivo especificado será aberto para gravação. Se o arquivo não existir, um
//arquivo vazio será criado:
var fs = require('fs');

//Cria um arquivo vazio nomeado mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
})