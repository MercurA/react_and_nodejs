const IoC = require('electrolyte');

IoC.use(IoC.dir('./'));

let http = IoC.create('server/http');

http.start();