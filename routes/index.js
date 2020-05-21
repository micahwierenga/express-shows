var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Episodics' });
});

// router.get('/greeting/:first/:last', function(req, res, next) {
//   console.log('req.params:', req.params);
//   res.send(`Hello ${req.params.first} ${req.params.last}`)
// })

// router.get('/greet', function(req, res, next) {
//   console.log('req.query:', req.query)
//   res.send(`Greet ${req.query.firstName} ${req.query.lastName}`);
// })

module.exports = router;
