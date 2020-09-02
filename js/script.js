// Getting the canvas and context elements
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

var dots = []


function createDots(n) {
    for (let i = 0; i < n; i++) {
        newDot = [randomInt(0, canvas.width), randomInt(0, canvas.height)]
        dots.push(newDot)
    }
}

// Adjusts the canvas size according to window size
function resizeCanvas() {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}

function drawDots() {
    dots.forEach( dot => {
        ctx.fillRect(dot[0], dot[1], 3, 3)
    })
}

function moveDots() {
    dots.forEach( dot => {
        ctx.clearRect(dot[0], dot[1], 3, 3)
        dot[0] += 1
    })

    drawDots()
}

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

function main() {
    createDots(10)
    drawDots()
    setInterval(moveDots, 50)
}

// Executes main function
resizeCanvas()
main()