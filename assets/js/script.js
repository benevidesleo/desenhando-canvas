
// INITIAL DATA
let currentColor = 'black'
let screen = document.querySelector('#tela')
let context = screen.getContext('2d')
let draw = false
let mouseX = 0
let mouseY = 0


// EVENTS
document.querySelectorAll('.colorArea .color').forEach((item) => {
    item.addEventListener('click', colorClick)
})

screen.addEventListener('mousedown', mouseDownE)
screen.addEventListener('mousemove', mouseMoveE)
screen.addEventListener('mouseup', mouseUpE)
document.querySelector('.clear').addEventListener('click', buttonClear)


// FUNCTIONS
function colorClick(e) {
    let color = e.target.getAttribute('data-color')
    currentColor = color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}
function mouseDownE(e) {
    draw = true
    mouseX = e.pageX - screen.offsetLeft
    mouseY = e.pageY - screen.offsetTop
}

function mouseMoveE(e) {
    if (draw) {
        canDraw(e.pageX, e.pageY)
    }
}

function mouseUpE() {
    draw = false
}

function canDraw(x, y) {
    let pointX = x - screen.offsetLeft
    let pointY = y - screen.offsetTop

    context.beginPath()
    context.lineWidth = 4
    context.lineJoin = "round"
    context.moveTo(mouseX, mouseY)
    context.lineTo(pointX, pointY)
    context.closePath()
    context.strokeStyle = currentColor
    context.stroke()

    mouseX = pointX
    mouseY = pointY
}

function buttonClear() { 
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
}





