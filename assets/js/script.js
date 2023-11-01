
// INITIAL DATA
let currentColor = 'black'
let scren = document.querySelector('#tela')
let context = scren.getContext('2d')
let draw = false
let mouseX = 0
let mouseY = 0


// EVENTS
document.querySelectorAll('.colorArea .color').forEach((item)=> { 
    item.addEventListener('click', colorClick) 
})

scren.addEventListener('mousedown', mouseDownE)
scren.addEventListener('mousemove', mouseMoveE)
scren.addEventListener('mouseup', mouseUpE)


// FUNCTIONS
function colorClick(e) { 
    let color = e.target.getAttribute('data-color')
    currentColor = color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}
function mouseDownE(e) { 
   draw = true
   mouseX = e.pageX - scren.offsetLeft
   mouseY = e.pageY - scren.offsetTop
}

function mouseMoveE(e) { 
   if(draw) { 
   canDraw(e.pageX, e.pageY)
   } 
}

function mouseUpE() { 
   draw = false
}

function canDraw(x, y) { 
    let pointX = x - scren.offsetLeft
    let pointY = y - scren.offsetTop


    context.beginPath()
    context.lineWidth = 4
    context.lineJoin = 'round'
    context.moveTo(mouseX, mouseY)
    context.lineTo(mouseX, mouseY)






    mouseX = pointX
    mouseY = pointY
}





