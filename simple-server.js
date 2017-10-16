'use strict';
const http = require('http');
const port = 3000;

const requestHandler = (request,response) => {
  console.log(request.url);
  response.end(`OMG I'm a node.js web server!`);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something terrible has happened', err);
  }
  console.log(`server is listening on Port ${port}`);
});
