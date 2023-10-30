
// INITIAL DATA
let currentColor = 'black'


// EVENTS
document.querySelectorAll('.colorArea .color').forEach((item)=> { 
    item.addEventListener('click', colorClick) 
})


// FUNCTIONS
function colorClick(e) { 
    let color = e.target.getAttribute('data-color')
    currentColor = color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}