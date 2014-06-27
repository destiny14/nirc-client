/*
    index.js

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

// standard express routing

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/chat', function(req, res) {
	res.render('chat', { title: 'Express' });
});

module.exports = router;