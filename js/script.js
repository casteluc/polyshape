// Apply changes on window load
window.addEventListener("load", () => {
    // Getting the canvas element on window load
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext('2d')
    
    // Adjusting canvas size
    resizeCanvas()
})

// Adjusting canvas on window resize
window.addEventListener("resize", resizeCanvas)

// Adjusts the canvas size according to window size
const resizeCanvas = () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}
