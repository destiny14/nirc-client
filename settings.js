/*
    settings.js

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

// please read the comments!

// BEGIN CONFIG VARIABLES

// WEB INTERFACE CONFIG

// the port the webclient will run on
const webPort = 3000;

// IRC CLIENT CONFIG

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

exports.webPort = webPort;
exports.userName = userName;
exports.realName = realName;
exports.port = port;
exports.autoRejoin = autoRejoin;
exports.stripColors = stripColors;
exports.messageSplit = messageSplit;