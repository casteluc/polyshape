import * as engine from './engine.js'

const canvas = document.getElementById("canvas")

// Setting initital values for distance and speed
var distance = 300

document.getElementById("incSpeed").addEventListener("click", engine.incSpeed)
document.getElementById("decSpeed").addEventListener("click", engine.decSpeed)
// Adjusts the canvas size according to window size
function resizeCanvas() {
    canvas.height = window.innerHeight - 50
    canvas.width = window.innerWidth - 5
}

function timeLoop() {
    engine.drawDots()
    engine.drawLines(distance)
    engine.moveDots()
    engine.checkCollision()
}

// Declaring the main function
function main() {
    resizeCanvas()
    engine.createDots(15)
    engine.drawDots()
    setInterval(timeLoop, 25)

    // Adding new dot by clicking on the screen
    canvas.addEventListener("click", engine.addDot)
}


// Executes main function
main()