// let a = 1;
// let b = 100;
// let c = a+b;
// console.log ("C = ",c);

import http from 'node:http';
// const http = require('node:http');



const server = http.createServer((request, response) => {
    response.write('<h1>Hello, World!</h1>');
    response.end();

})
.listen(8080);
