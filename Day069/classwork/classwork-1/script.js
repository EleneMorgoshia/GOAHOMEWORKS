
const p = document.getElementById('p')

p.addEventListener('click',clickChangeColor) // პირველი პარამეტრი - Event ტიპის ; მეოერე პარამეტრი - ფუნქცია( ფრჩხილების გარეშე )
p.addEventListener('mouseover', changeColor) 
p.addEventListener('mousedown',green) //mousedown - დაჭწრილ მდგომარეობაშ იყოფნა 

p.addEventListener('click', function(){
    p.style.color = 'blue'
}) // ვქმნით ისეთ ფუნქციას, რომელსაც სახელი არ აქვს (იქმნება მხოლოდ ამ ელემენტისთვის!)

function clickChangeColor(){
    p.style.color = 'blue'
}

function changeColor(){
    p.style.color = 'red'
}

function green(){
    p.style.color = 'green'
}