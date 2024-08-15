//having the access to the html elements
const snake = document.getElementById('snake')

let vertical = 0
let horizontal = 0

document.addEventListener('keypress',function(event){
    switch(event.key){
        case 'w':
            vertical += 20
            snake.style.top = vertical + 'px'
            console.log(vertical + 'px')
            break
        case 's':
            vertical -= 20
            snake.style.top = vertical + 'px'
            console.log(vertical + 'px')
            break
        case 'a':
            horizontal += 20
            snake.style.left = horizontal + 'px'
            console.log(horizontal + 'px')
            break
        case 'd':
            horizontal -= 20
            snake.style.left = horizontal + 'px'
            console.log(horizontal + 'px')
            break
    }
})