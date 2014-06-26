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

router.post('/', function(req, res) {
	res.redirect('/chat');
});

module.exports = router;