//////////////////////////////////////////
//	settings.js (2014 Marco Stambor)	//
//	please read the comments!			//
//////////////////////////////////////////

// BEGIN CONFIG VARIABLES

// the client's user name, will be used as the hostname
const userName = 'nirc-client';

// used to determine the real name of a user, will be visible in whois commands
const realName = 'A small node-driven webclient for IRC';

// the port used to connect to a server. will be selectable for web users in near future
const port = 6667;

// automatically rejoin if connection is lost
const autoRejoin = true;

// removes colorcodes send by some irc clients
const stripColors = true;

// splits all messages exceeding the given character count into multiple messages
const messageSplit = 512;

// END CONFIG VARIABLES

exports.userName = userName;
exports.realName = realName;
exports.port = port;
exports.autoRejoin = autoRejoin;
exports.stripColors = stripColors;
exports.messageSplit = messageSplit;