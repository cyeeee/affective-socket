require('dotenv').config();

var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection: ' + socket.id);

    socket.on('input', inputMsg);

    function inputMsg(data) {
        // console.log(data);

        query({"inputs": data.userInput}).then((response) => {
            // let result = JSON.stringify(response);
            // console.log(result);

            socket.broadcast.emit('result', response[0]);

        });

        socket.broadcast.emit('input', data);
    }
}

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
		{
			headers: { Authorization: `Bearer ${process.env.API_KEY}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}