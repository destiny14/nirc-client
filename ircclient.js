/*
    ircclient.js

    This file is part of nirc-client.

    nirc-client is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    nirc-client is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with nirc-client.  If not, see http://www.gnu.org/licenses/.

    Copyright 2014 Marco Stambor
*/

// handles the irc client logic and
// message routing.

var irc = require('irc');
var settings = require('./settings');

// starts the irc client logic. Waits for a new client, 
// then initializes the irc client with the given 
// parameters and registers all neccessary listeners
function run(io) {
	// wait for a new socket.io client to connect
	io.on('connection', function(socket){
	    console.log('user connected');
	    var client;
	    var channel;
	    // wait for the client connect message from the socket.io client
	    socket.on('client connect', function(data){
	    	client = new irc.Client(data.server, data.nickname, { // start and connect the irc client
		    	userName: settings.userName,
		    	realName: settings.realName,
		    	port: settings.port,
		    	autoRejoin: settings.autoRejoin,
		    	channels: [data.channel],
		    	stripColors: settings.stripColors,
		    	messageSplit: settings.messageSplit,
			});
	    	channel = data.channel;

	    	// listener for messages at the current channel
	    	client.addListener('message' + data.channel, function(from, message){
	    		socket.emit('message recieved', {
	    			frm: from,
	    			msg: message
	    		});
	    	});

	    	// listener for the message of the day
	    	client.addListener('motd', function(motd){
	    		socket.emit('info recieved', {
	    			frm: 'motd',
	    			msg: motd
	    		});
	    	});

	    	// listener for user joins
	    	client.addListener('join' + data.channel, function(nickname, message){
	    		socket.emit('join recieved', {
	    			nick: nickname
	    		});
	    	});

	    	// listener for user quit
	    	client.addListener('quit', function(nickname, reason, channels, message){
	    		socket.emit('quit recieved', {
	    			nick: nickname,
	    			rs: reason
	    		});
	    	});

	    	// listener for the topic message
	    	client.addListener('topic', function(channel, topic, nick, message){
	    		socket.emit('info recieved', {
	    			frm: 'topic',
	    			msg: topic + " set by " + nick
	    		});
	    	});

	    	// listener for the userlist at the current channel
	    	client.addListener('names' + data.channel, function(nicks){
	    		socket.emit('nicklist recieved', {
	    			nicknames: nicks
	    		});
	    	});

	    	// prevent app from crashing, catch and print errors!
	    	client.addListener('error', function(message) {
	    		socket.emit('error recieved', {
	    			frm: "ERROR",
	    			msg: message.command
	    		})
				console.log('error: ', message);
			});
	    });
	 	
	 	// socket listener for processing messages sent from the irc client
	    socket.on('chat message', function(msg){
	    	console.log(msg);
	        if (typeof client !== 'undefined' && client) {
	        	client.say(channel, msg);
	        	socket.emit('message recieved', { // emit message recieved to display send text, from set to "Me"
	        		frm: 'Me',
	        		msg: msg
	        	});
	        } else {
	        	console.log("there was no client connected"); // Do nothing if the user managed to get on the chat page without open client
	        }
	    });

	    // socket listener for the socket's disconnected event
	    socket.on('disconnect', function(){
	        console.log("user disconnected");
	        if (typeof client !== 'undefined' && client) {
	        	client.disconnect(); // disconnect the irc client
	        } else {
	        	console.log("there was no client connected"); // Do nothing if the user managed to get on the chat page without open client
	        }
	        
	    });
	});
}

exports.run = run;