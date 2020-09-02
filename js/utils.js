// List of colors that the program will use
const colors = [
    "#A8FF3E",
    "#F4FF61",
    "#1EE3CF",
    "#AF0404",
    "#F30067",
    "#6927FF",
    "#EF4339",
    "#FF00C8",
    "#1E2A78"
]

// Returns a random number between the 2 numbers given
function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

// Function that returns a random number between s and -s, beeing != to 0 to use as dot speed
function randomSpeed(s) {
    let speed = randomInt(s * -1, s)
    while (true) {
        if (speed !== 0) {
            return speed
        } else {
            speed = randomInt(s * -1, s)
        }
    }
}

// Returns a random color from the colors list
function randomColor() {
    return colors[randomInt(0, colors.length)]
}

// Exporting functions
export {
    randomInt,
    randomSpeed,
    randomColor
}