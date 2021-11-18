var express = require("express");
const jacket_controlers= require('../controllers/jacket');
var router = express.Router();

/* GET home page. */
router.get('/', jacket_controlers.jacket_view_all_Page);

/* GET detail jacket page */ 
router.get('/detail', jacket_controlers.jacket_view_one_Page);

/* GET create jacket page */ 
router.get('/create', jacket_controlers.jacket_create_Page); 

/* GET create jacket page */ 
router.get('/update', jacket_controlers.jacket_update_Page);

/* GET create jacket page */ 
router.get('/delete', jacket_controlers.jacket_delete_Page);

module.exports = router;
