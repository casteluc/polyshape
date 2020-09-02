import { randomInt, randomSpeed, randomColor } from './utils.js'

// Getting the canvas and context elements
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// Initializing the dots list
var dots = []
var speed = 3
var minDistance = 300

// Creates all the inital dots that will be rendered on canvas
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

// Adds a new dot on the canvas
function addDot(e) {
    let newDot = {
        pos: {
            x: e.pageX,
            y: e.pageY - 50
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
    ctx.clearRect(0, 0, canvas.width, canvas.height)
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
        /* ctx.clearRect(dot.pos.x, dot.pos.y, 3, 3) */
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

function incSpeed() {
    speed += 1
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

function decSpeed() {
    if (speed > 3) {
        speed -= 1
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

function incDistance() {
    if (minDistance < 1200) {
        minDistance += 10
    }
}

function decDistance() {
    if (minDistance > 10) {
        minDistance -= 10
    }
}

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
}

