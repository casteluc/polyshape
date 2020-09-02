import * as engine from './engine.js'

const canvas = document.getElementById("canvas")

// Setting initital values for distance and speed
var speed = 25
var distance = 300

document.getElementById("incSpeed").addEventListener("click", engine.incSpeed)

// Adjusts the canvas size according to window size
function resizeCanvas() {
    canvas.height = window.innerHeight - 4
    canvas.width = window.innerWidth - 4
}

function timeLoop() {
    engine.moveDots()
    engine.checkCollision()
    engine.drawDots()
    engine.drawLines(distance)
}

// Declaring the main function
function main() {
    resizeCanvas()
    engine.createDots(15)
    engine.drawDots()
    setInterval(timeLoop, speed)

    // Adding new dot by clicking on the screen
    canvas.addEventListener("click", engine.addDot)
}


// Executes main function
main()