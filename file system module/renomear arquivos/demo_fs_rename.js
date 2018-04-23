//O método fs.rename() renomea o arquivo especificado:
var fs = require('fs');

//Renomeia o arquivo "mynewfile1.txt" em "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
    if(err) throw err;
    console.log('File Renamed!');
});