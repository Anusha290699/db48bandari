var express = require("express");
const jacket_controlers= require('../controllers/jacket');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', jacket_controlers.jacket_view_all_Page);

/* GET detail jacket page */ 
router.get('/detail', jacket_controlers.jacket_view_one_Page);

/* GET create jacket page */ 
router.get('/create',secured, jacket_controlers.jacket_create_Page); 

/* GET create jacket page */ 
router.get('/update',secured, jacket_controlers.jacket_update_Page);

/* GET create jacket page */ 
router.get('/delete', secured,jacket_controlers.jacket_delete_Page);

module.exports = router;
