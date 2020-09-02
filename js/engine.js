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
    dots.forEach( dot => {
        ctx.fillRect(dot.pos.x, dot.pos.y, 3, 3)
    })
}


// Moves all the dots on canvas
function moveDots() {
    dots.forEach( dot => {
        ctx.clearRect(dot.pos.x, dot.pos.y, 3, 3)
        dot.pos.x += dot.speed.x
        dot.pos.y += dot.speed.y
    })
    
    checkCollision()
    drawDots()
}

function checkCollision() {
    dots.forEach( dot => {
        if (dot.pos.x >= canvas.width - 2 || dot.pos.x <= 0) {
            dot.speed.x = dot.speed.x * -1
        } else if (dot.pos.y >= canvas.height - 2 || dot.pos.y <= 0) {
            dot.speed.y = dot.speed.y * -1
        }''
    })
}

export {
    createDots,
    drawDots,
    moveDots
}

