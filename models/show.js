const shows = [
    { id: 1, name: 'The Office', cast: ['Steve Carell', 'Rainn Wilson', 'John Krasinski'] },
    { id: 2, name: 'It\'s Always Sunny in Philadelphia', cast: ['Rob McElhenney', 'Charlie Day', 'Glenn Howerton'] },
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
    getAllShows,
    getOneShow,
    createNewShow,
    deleteOneShow,
    updateOneShow,
}

function updateOneShow(showId, showObj) {
    const foundShow = shows.find(show => show.id === parseInt(showId));
    showObj.cast = filterEmptyStrings(showObj.cast);
    Object.assign(foundShow, showObj);
}

function deleteOneShow(showId) {
    const idx = shows.findIndex(show => show.id === parseInt(showId));
    shows.splice(idx, 1);
}

function createNewShow(newShowObj) {
    newShowObj.id = Date.now() % 1000000;
    newShowObj.cast = filterEmptyStrings(newShowObj.cast);
    shows.push(newShowObj);
}

function getOneShow(showId) {
    return shows.find(show => show.id === parseInt(showId))
}

function getAllShows() {
    return shows;
}

function filterEmptyStrings(arr) {
    return arr.filter(a => a !== '');
}