import { randomInt, randomSpeed, randomColor } from './utils.js'

// Getting the canvas and context elements
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// Initializing the dots list
var dots = []
var speed = 3
var minDistance = 300

// Creates all the inital dots that will be rendered on canvas
// Every dot has position, speed and a random color
// Speed (x or y) can't be equals to 0
function createDots(n) {
    for (let i = 0; i < n; i++) {
        let newDot = {
            pos: {
                x: randomInt(0, canvas.width),
                y: randomInt(0, canvas.height)
            },

            speed: {
                x: randomSpeed(speed),
                y: randomSpeed(speed)
            },

            color: randomColor()
        }
        
        dots.push(newDot)
    }
}

// Adds a new dot where the user clicked
function addDot(e) {
    let newDot = {
        pos: {
            x: e.pageX,
            y: e.pageY
        },

        speed: {
            x: randomSpeed(speed),
            y: randomSpeed(speed)
        },

        color: randomColor()
    }

    dots.push(newDot)
}

// Renders all the dots on the canvas
function drawDots() {
    // Clears the screen before rendering again
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Renders all the dots
    dots.forEach( dot => {
        ctx.fillStyle = dot.color
        ctx.fillRect(dot.pos.x, dot.pos.y, 3, 3)
    })
}

// Draws lines connecting the dots on the canvas according to the given distance
function drawLines() {
    dots.forEach( dot1 => {
        dots.forEach( dot2 => {
            let xDistance = Math.abs(dot1.pos.x - dot2.pos.x)
            let yDistance = Math.abs(dot1.pos.y - dot2.pos.y)
            
            // Checks if 2 dots distance is smaller than the minDistance
            // If so, draws a line between the 2 dots
            if (xDistance <= minDistance && yDistance <= minDistance) {
                ctx.beginPath()
                ctx.moveTo(dot1.pos.x + 1, dot1.pos.y + 1)
                ctx.lineTo(dot2.pos.x + 1, dot2.pos.y + 1)
                ctx.strokeStyle = dot1.color
                ctx.stroke()
            }
        })
    })
}

// Moves all the dots on canvas
function moveDots() {
    dots.forEach( dot => {
        dot.pos.x += dot.speed.x
        dot.pos.y += dot.speed.y
    })
}

// Checks if any dot has collided with the border
function checkCollision() {
    dots.forEach( dot => {
        if (dot.pos.x >= canvas.width - 1 || dot.pos.x <= 0) {
            dot.speed.x = dot.speed.x * -1
        } else if (dot.pos.y >= canvas.height - 1 || dot.pos.y <= 0) {
            dot.speed.y = dot.speed.y * -1
        }
    })
}

// Increases all dots speed
function incSpeed() {
    // Increasing control variable
    speed += 1

    // If the current dot speed (x and y) is negative, its value will be decreased
    // and if it's positive, its value will be increased.
    dots.forEach( dot => {
        if (dot.speed.x > 0) {
            dot.speed.x += 1
        } else {
            dot.speed.x -= 1
        }

        if (dot.speed.y > 0) {
            dot.speed.y += 1
        } else {
            dot.speed.y -= 1
        }
    })
}

// Decreases all dots speed
function decSpeed() {
    // Only decreases the speed if it's bigger than the mininum speed value
    if (speed > 3) {
        // Decreasing control variable
        speed -= 1

        // If the current dot speed (x and y) is negative, its value will be increased
        // and if it's positive, its value will be decreased.
        dots.forEach( dot => {
            if (dot.speed.x > 0) {
                dot.speed.x -= 1
            } else {
                dot.speed.x += 1
            }
    
            if (dot.speed.y > 0) {
                dot.speed.y -= 1
            } else {
                dot.speed.y += 1
            }
        })
    }
}

// Increases the minDistance by 10
function incDistance() {
    if (minDistance < 1200) {
        minDistance += 10
    }
}

// Decreases the minDistance by 10
function decDistance() {
    if (minDistance > 10) {
        minDistance -= 10
    }
}

// Reset the whole canvas to its inital state
function reset() {
    minDistance = 300
    speed = 3

    dots = []
    createDots(15)
}

// Exporting functions
export {
    createDots,
    drawDots,
    moveDots,
    addDot,
    drawLines,
    checkCollision,
    incSpeed,
    decSpeed,
    incDistance,
    decDistance,
    reset
}

