import * as engine from './engine.js'

const canvas = document.getElementById("canvas")

// Adjusts the canvas size according to window size
function resizeCanvas() {
    canvas.height = window.innerHeight - 4
    canvas.width = window.innerWidth - 4
}

function timeLoop() {
    engine.moveDots()
    engine.checkCollision()
    engine.drawDots()
    engine.drawLines(300)
}

// Declaring the main function
function main() {
    resizeCanvas()
    engine.createDots(10)
    engine.drawDots()
    setInterval(timeLoop, 25)

    // Adding new dot by clicking on the screen
    canvas.addEventListener("click", engine.addDot)
}


// Executes main function
main()