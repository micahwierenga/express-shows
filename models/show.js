const shows = [
    { id: 1, name: 'The Office', cast: ['Steve Carell', 'Rainn Wilson', 'John Krasinski'] },
    { id: 2, name: 'It\s Always Sunny in Philadelphia', cast: ['Rob McElhenney', 'Charlie Day', 'Glenn Howerton'] },
    { id: 3, name: 'Seinfeld', cast: ['Jerry Seinfeld', 'Julia Louis-Dreyfus', 'Jason Alexander'] },
    { id: 4, name: 'Parks and Recreation', cast: ['Amy Poehler', 'Nick Offerman'] },
    { id: 5, name: 'Breaking Bad', cast: ['Bryan Cranston', 'Aaron Paul'] },
    { id: 6, name: 'Stranger Things', cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Noah Schnapp'] },
    { id: 7, name: 'Letterkenny', cast: ['Jared Keeso', 'Michelle Mylett'] },
    { id: 8, name: 'Shameless', cast: ['Emmy Rosen', 'Ethan Cutkosky', 'William H Macy'] },
    { id: 9, name: 'BoJack Horseman', cast: ['Will Arnett', 'Amy Sedaris'] },
    { id: 10, name: 'Brooklyn Nine Nine', cast: ['Andy Samberg', 'Melissa Fumero'] },
    { id: 11, name: 'How I Met Your Mother', cast: ['Cobie Smulders', 'Neil Patrick Harris'] },
];

module.exports = {
    getAllShows: function() {
        return shows;
    },
    getOneShow: function(showId) {
        return shows.find(show => show.id === parseInt(showId))
    }
}