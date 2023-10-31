
// INITIAL DATA
let currentColor = 'black'
let scren = document.querySelector('#tela')
let context = scren.getContext('2d')
let draw = false


// EVENTS
document.querySelectorAll('.colorArea .color').forEach((item)=> { 
    item.addEventListener('click', colorClick) 
})

scren.addEventListener('mousedown', mouseDown)
scren.addEventListener('mousemove', mouseMove)
scren.addEventListener('mouseup', mouseUp)


// FUNCTIONS
function colorClick(e) { 
    let color = e.target.getAttribute('data-color')
    currentColor = color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}
function mouseDown() { 
   draw = true
}

function mouseMove() { 
   if(draw) { 
     console.log( 'desenho ativo')
   } 
}

function mouseUp() { 
   draw = false
}





