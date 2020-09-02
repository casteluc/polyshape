// Returns a random number between the 2 numbers given
function randomInt(min, max) {
    console.log("teste")
    return min + Math.floor((max - min) * Math.random());
}

export { randomInt }