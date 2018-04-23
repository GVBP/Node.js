var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

//O método parse retorna um objeto contendo propriedade url:
console.log(q.host); // localhost:8080
console.log(q.pathname); // /default
console.log(q.search); // ?year=2017&month=february

//A propriedade query retorna um objeto com todas os parametros querystring como propriedade:
var qdata = q.query;
console.log(qdata.month); // february