import * as engine from './engine.js'

const canvas = document.getElementById("canvas")

// Adjusts the canvas size according to window size
function resizeCanvas() {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}

// Declaring the main function
function main() {
    resizeCanvas()
    engine.createDots(100)
    engine.drawDots()
    setInterval(engine.moveDots, 50)
}

// Executes main function
main()