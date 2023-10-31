
// INITIAL DATA
let currentColor = 'black'
let scren = document.querySelector('#tela')
let context = scren.getContext('2d')


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