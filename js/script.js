// Getting the canvas and context elements
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

var dot = [10, 10]

function main() {
    draw()
    setInterval(move, 50)
}

// Adjusts the canvas size according to window size
function resizeCanvas() {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}

function draw() {
    ctx.fillRect(dot[0],dot[1],3,3)
}

function move() {
    ctx.clearRect(dot[0], dot[1], 3, 3)
    dot[0] += 1
    console.log(dot)
    draw(ctx)
}


// Resizing canvas on window load
window.addEventListener("load", resizeCanvas)

// Executes main function
main()