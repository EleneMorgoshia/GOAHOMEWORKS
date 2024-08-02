// რაც კლასში გავაკეთეთ მაგის გაუმჯობესება(ფუნქციონალი ჩვენ თვითონ უნდა მოვიფიქროთ)

//we have to have the accsess to the desired html element
const figure = document.getElementById('figure')
const counter = document.getElementById('counter')

//creating functio that will change the location of the figure randomly
let counting = -1
function randomMoving(){
    let top = Math.floor(Math.random() * 500) // random number from 0 to 100
    let left = Math.floor(Math.random() * 500)
    let right = Math.floor(Math.random() * 500)
    let bottom = Math.floor(Math.random() * 500)

    figure.style.marginTop = top + 'px'
    figure.style.marginLeft = left + 'px'
    figure.style.marginRight = right + 'px'
    figure.style.marginBottom = bottom + 'px'

    counting += 1
    counter.innerHTML = counting
}

console.log(randomMoving())
