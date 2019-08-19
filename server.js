
const express = require('express');
const interval = require('./logic');
const logger = require('./logger');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');


const server = express();
server.use(express.static('.'));
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());
server.use('', logger);
server.listen(8080);

console.log('Server started!');



let WebSocketServer = new require('ws');

let clients = {};

let webSocketServer = new WebSocketServer.Server({
    port: 8081
});

webSocketServer.on('connection', function(ws) {

    let id = Math.random();
    clients[id] = ws;
    console.log("новое соединение " + id);

    interval(ws);

    ws.on('close', function() {
        console.log('соединение закрыто ' + id);
        delete clients[id];
    });

});