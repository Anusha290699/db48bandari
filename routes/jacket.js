var express = require("express");
const jacket_controlers= require('../controllers/jacket');
var router = express.Router();

/* GET home page. */
router.get('/', jacket_controlers.jacket_view_all_Page); 
module.exports = router;