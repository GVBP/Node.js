var events = require('events');
var eventEmitter = new events.EventEmitter();

//Cria um manipulador de evento:
var myEventHandler = function() {
    console.log('I hear a scream!');
}

//Atribui o manipulador de eventos a um evento:
eventEmitter.on('Scream', myEventHandler);

//Dispara o evento 'scream':
eventEmitter.emit('scream');