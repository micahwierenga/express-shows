const Show = require('../models/show');

module.exports = {
    index,
    show,
    new: newShow,
    create,
    delete: deleteShow,
    edit,
    update
};
  
function update(req, res) {
    Show.updateOneShow(req.params.id, req.body);
    res.redirect(`/shows/${req.params.id}`);
}
  
function edit(req, res) {
    const show = Show.getOneShow(req.params.id);
    res.render('shows/edit', {
        show,
        title: `Edit ${show.name}`
    });
}
  
function deleteShow(req, res) {    
    Show.deleteOneShow(req.params.id);
    res.redirect('/shows');
}
  
function create(req, res) {    
    Show.createNewShow(req.body);
    res.redirect('/shows');
}
  
function newShow(req, res) {
    res.render('shows/new.ejs', {
        title: 'Add Show'
    });
}

function show(req, res) {
    const show = Show.getOneShow(req.params.id);
    res.render('shows/show', {
      show,
      title: show.name
    });
}

function index(req, res, next) {
    res.render('shows/index', {
        shows: Show.getAllShows(),
        title: 'All Shows'
    });
}
