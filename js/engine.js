import { randomInt } from './utils.js'

// Getting the canvas and context elements
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

var dots = []

// Creates all the inital dots that will be rendered on canvas
function createDots(n) {
    for (let i = 0; i < n; i++) {
        let newDot = [randomInt(0, canvas.width), randomInt(0, canvas.height)]
        dots.push(newDot)
    }
}

// Renders all the dots on the canvas
function drawDots() {
    dots.forEach( dot => {
        ctx.fillRect(dot[0], dot[1], 3, 3)
    })
}

// Moves all the dots on canvas
function moveDots() {
    dots.forEach( dot => {
        ctx.clearRect(dot[0], dot[1], 3, 3)
        dot[0] += 1
    })
    
    drawDots()
}

export {
    createDots,
    drawDots,
    moveDots
}

