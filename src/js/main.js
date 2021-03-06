import * as engine from './engine.js'

// Getting the canvas element
const canvas = document.getElementById("canvas")

// Setting initital value for distance
var distance = 300

// Adds events to the buttons
document.getElementById("incSpeed").addEventListener("click", engine.incSpeed)
document.getElementById("decSpeed").addEventListener("click", engine.decSpeed)
document.getElementById("incDistance").addEventListener("click", engine.incDistance)
document.getElementById("decDistance").addEventListener("click", engine.decDistance)
document.getElementById("reset").addEventListener("click", engine.reset)

// Adjusts the canvas size according to window size
function resizeCanvas() {
    canvas.height = window.innerHeight - 5
    canvas.width = window.innerWidth - 5
}

// Function that will be executed in a loop, needed to render all
// the components on the screen dinamically
function timeLoop() {
    engine.drawDots()
    engine.drawLines(distance)
    engine.moveDots()
    engine.checkCollision()
}

// Declaring the main function
function main() {
    // Canvas resize and first screen render
    resizeCanvas()
    engine.createDots(15)
    engine.drawDots()
    setInterval(timeLoop, 25)

    // Adding new dot by clicking on the screen
    canvas.addEventListener("click", engine.addDot)
}


// Executes the main function
main()