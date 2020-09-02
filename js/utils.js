// Returns a random number between the 2 numbers given
function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

// Function that returns a random number between -3 and 3 and != to 0 to use as dot speed
function randomSpeed() {
    let speed = randomInt(-3, 3)
    while (true) {
        if (speed !== 0) {
            return speed
        } else {
            speed = randomInt(-3, 3)
        }
    }
}

export {
    randomInt,
    randomSpeed,
}