var irc = require('irc');

function run(io) {
	io.on('connection', function(socket){
	    console.log('user connected');
	    var client = irc.Client();
	    socket.on('chat message', function(msg){
	        console.log("message: " + msg);
	    });
	    socket.on('disconnect', function(){
	        console.log("user disconnected");
	    });
	});
}

exports.run = run;