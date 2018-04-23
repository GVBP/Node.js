var fs = require('fs');
var readStream = fs.createReadStream('./demofile.txt');

//Escreva no console quando o arquivo é aberto:
readStream.on('open', function() {
    console.log('The file is open');
});