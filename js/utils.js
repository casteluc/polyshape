// Returns a random number between the 2 numbers given
function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

// TODO: implement logic that makes dot unable to move horizontaly or verticaly
// TODO: implement logic that makes dot unable to be stationary
function randomSpeed() { 
    return randomInt(-3, 3) 
}

export {
    randomInt,
    randomSpeed,
}