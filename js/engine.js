import { randomInt, randomSpeed } from './utils.js'

// Getting the canvas and context elements
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// Initializing the dots list
var dots = []

// Creates all the inital dots that will be rendered on canvas
function createDots(n) {
    for (let i = 0; i < n; i++) {
        let newDot = {
            pos: {
                x: randomInt(0, canvas.width),
                y: randomInt(0, canvas.height)
            },

            speed: {
                x: randomSpeed(),
                y: randomSpeed()
            }
        }

        dots.push(newDot)
    }
}


// Renders all the dots on the canvas
function drawDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    dots.forEach( dot => {
        ctx.fillRect(dot.pos.x, dot.pos.y, 3, 3)
    })
}

function drawLines(minDistance) {
    dots.forEach( dot1 => {
        dots.forEach( dot2 => {
            let xDistance = Math.abs(dot1.pos.x - dot2.pos.x)
            let yDistance = Math.abs(dot1.pos.y - dot2.pos.y)
            
            if (xDistance <= minDistance && yDistance <= minDistance) {
                ctx.beginPath()
                ctx.moveTo(dot1.pos.x + 1, dot1.pos.y + 1)
                ctx.lineTo(dot2.pos.x + 1, dot2.pos.y + 1)
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

// Adds a new dot on the canvas
function addDot(e) {
    let newDot = {
        pos: {
            x: e.pageX,
            y: e.pageY
        },

        speed: {
            x: randomSpeed(),
            y: randomSpeed()
        }
    }

    dots.push(newDot)
}

// Checks if any dot has collided with the border
function checkCollision() {
    dots.forEach( dot => {
        if (dot.pos.x >= canvas.width - 2 || dot.pos.x <= 0) {
            dot.speed.x = dot.speed.x * -1
        } else if (dot.pos.y >= canvas.height - 2 || dot.pos.y <= 0) {
            dot.speed.y = dot.speed.y * -1
        }
    })
}

export {
    createDots,
    drawDots,
    moveDots,
    addDot,
    drawLines,
    checkCollision
}

