const shows = [
    { id: 1, name: '', cast: [] },
    { id: 2, name: '', cast: [] },
    { id: 3, name: '', cast: [] },
    { id: 4, name: '', cast: [] },
    { id: 5, name: '', cast: [] },
    { id: 6, name: '', cast: [] },
    { id: 7, name: '', cast: [] },
];

module.exports = {
    getAllShows: function() {
        return shows;
    },
    getOneShow: function(showId) {
        return shows.find(show => show.id === parseInt(showId))
    }
}