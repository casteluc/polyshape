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
    
    drawDots()
}

export {
    createDots,
    drawDots,
    moveDots
}

