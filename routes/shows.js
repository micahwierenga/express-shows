var express = require('express');
var router = express.Router();
var showsCtrl = require('../controllers/shows');

// GET /shows
router.get('/', showsCtrl.index);
// GET /shows/new   to see a new todo form 
router.get('/new', showsCtrl.new);
// GET /shows/:id
router.get('/:id', showsCtrl.show);
// GET /shows/:id/edit
router.get('/:id/edit', showsCtrl.edit);
// POST /shows
router.post('/', showsCtrl.create);
// DELETE /shows/:id
router.delete('/:id', showsCtrl.delete);
// PUT /shows/:id
router.put('/:id', showsCtrl.update);


module.exports = router;
