var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var jacket_controller = require('../controllers/jacket');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// jacket ROUTES ///
// POST request for creating a jacket.
router.post('/jacket', jacket_controller.jacket_create_post);
// DELETE request to delete jacket.
router.delete('/jacket/:id', jacket_controller.jacket_delete);
// PUT request to update jacket.
router.put('/jacket/:id', jacket_controller.jacket_update_put);
// GET request for one jacket.
router.get('/jacket/:id', jacket_controller.jacket_detail);
// GET request for list of all jacket items.
router.get('/jacket', jacket_controller.jacket_list);
module.exports = router;