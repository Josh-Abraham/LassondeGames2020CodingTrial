// To Run type in node main.js

var app = require("express")();
var fs = require("fs");
var http = require("http").Server(app);
var io = require("socket.io")(http);

var presentationKey = "baseInstance";
var instances = {};

instances[presentationKey] = null;

class Success {
	constructor(payload) {
		this.type = "SUCCESS";
		this.payload = payload;
		populatePresentationData(payload);
	}
}

class Instance {
	constructor(id) {
		this.id = id;
		this.shouldAnimate = false;
	}
	animate() {
		this.shouldAnimate = true;
		return new Success(this);
	};

}



populatePresentationData = function(instance) {
	io.emit('updateInstance', {"presentationInstance": instance});
}

app.get('/instance', function (req, res) {
	var response = new Success(instances[req.headers['host']]);
	setTimeout((function() {res.json(response)}), 0);
});

app.post('/instance', function (req, res) {
	console.log(req.headers)
	instances[req.headers['host']] = new Instance(req.headers['host']);
	var response = new Success(instances[req.headers['host']]);
	setTimeout((function() {res.json(response)}), 0);
});

app.delete('/instance', function (req, res) {
	instances[req.headers['host']] = null;
	var response = new Success(null);
	setTimeout((function() {res.json(response)}), 0);
});

app.post('/animate', function (req, res) {
	console.log(instances)
	var response = instances[req.headers['host']].animate()
	setTimeout((function() {res.json(response)}), 100);
});

app.get('/',  function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function(req, res) {
	res.sendFile(__dirname + "/style.css");
});

app.get('/updateInstance.js', function(req, res) {
	res.sendFile(__dirname + "/updateInstance.js");
});

io.on('connection', function(socket) {
	io.emit('updateInstance',  {"presentationInstance": null});
});

var server = http.listen(8081, function(){
	var port = server.address().port;
	console.log("Lassonde Games 2020 Coding Trial listening at http://127.0.0.1:%s", port);
});
