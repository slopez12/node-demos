'use strict';
const zmq = require('zeromq');

const subscriber = zmq.socket('sub');

subscriber.subscribe('');

subscriber.on('message', data => {
  const message = JSON.parse(data);
  const date = new Date(message.timestamp);
  console.log(`File "${message.file}" changed at ${date}`);
});

subscriber.connect("tcp://192.168.1.123:60400");
