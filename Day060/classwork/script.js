prompt("Enter your name:")


//ფუნქია, რომელიც გვისვამს შეკითხვას (პასუხი:ok ან cancel)
confirm('etanxmebi tu ara chvens pirobebs')

//////////////////////////////////////////////
// როგორ მივწვდეთ html დოკუმნეტს
document.body.innerHTML = 'hello'

// html-ში არსებული ელემენტის შეცვლა
let p = document.getElementById('p')
p.innerHTML = 'goa'

//three ways of getting the element
document.getElementsByTagName
document.getElementsByClassName
document.getElementById

/////////////////////////////////
let paragraph = document.getElementsByTagName('p') // the list of every p - paragraph = [ p,p,p,p]

// console.log(p[1].innerHTML)
// console.log(p[0].innerHTML)

//classwork:print every elements from the html document
for(let i = 0 ; i < paragraph.length; i++){
    console.log(paragraph[i].innerHTML)
    paragraph[i].innerHTML = 'GOA' // items will be replaced by 'goa' 
    paragraph[i].innerHTML += i
}

////////////////////////////////////
let textParagraph = documnet.getElementsByClassName('change')
//textParagraph = [ chnage, change ]

let firstParagraph = documnet.getElementsByid('first-paragraph')
//there will not be a list when we use the getElementByid 