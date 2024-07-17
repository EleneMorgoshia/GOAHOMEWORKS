//წინა გაკვეთილზე ნასწავალი მასალის დამხეცება

//javascriptიდან მივწვდეთ html-ის დოკუმნეტის ელემენტებს

//id-ით
let firstPaagraph = document.getElementById('first-p')
firstPaagraph.innerHTML = 'changed-Blue'

//class-ით
let secondParagraph = document.getElementsByClassName('second-p')
secondParagraph[0].innerHTML = 'changed-Red'

//Tag-ით
let firstH1 = document.getElementsByTagName('h1')
firstH1[0].innerHTML = 'CHANGED-H1'


//javascript-იდან გავსტილოთ html-ის ელემენტები
firstPaagraph.style.color = 'blue'
firstPaagraph.style.fontSize = '1.5rem'
secondParagraph[0].style.color = 'red'
secondParagraph[0].style.fontSize = '1.5rem'