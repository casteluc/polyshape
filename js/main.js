import * as engine from './engine.js'

const canvas = document.getElementById("canvas")

// Adjusts the canvas size according to window size
function resizeCanvas() {
    canvas.height = window.innerHeight - 5
    canvas.width = window.innerWidth - 5
}

// Declaring the main function
function main() {
    resizeCanvas()
    engine.createDots(10)
    engine.drawDots()
    setInterval(engine.moveDots, 25)
    canvas.addEventListener("click", engine.addDot)
}


// Executes main function
main()