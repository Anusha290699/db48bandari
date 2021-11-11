var express = require("express");
const jacket_controlers= require('../controllers/jacket');
var router = express.Router();

/* GET bottle */
router.get('/', jacket_controlers.jacket_view_all_Page); 
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('jacket', { title: 'Search Results jacket' });
});

module.exports = router;
