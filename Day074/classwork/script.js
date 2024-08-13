const div = document.getElementById('div')
const p = document.getElementById('p1')

//ელემენტის წაშლა javascript-იდან
// div.removeChild(p) //უნდა მივწვდეთ წასაშლელი ელემენტის მშობელ ელემენტს და ისე წავშალოთ ელემენტი

//ელემენტების შექმნა
// const newP = document.createElement('p') //ვქმნით ახალ ელემენს (პარაგრაფს)
// const node = document.createTextNode('xello') //ვქმნით ცვლადს რომელშიც ბამატებთ 'hello'

//ელემენტების დამატება 
// newP.appendChild(node) //ელემენტი node ჩაჯდა newPში(პარაგრაფში,რომელშიც არაფერი არ ეწერა ჯერ)

// div.appendChild(newP) // დივში დავამატეთ ახალი პარაგრაფი 
//////////////////////////////////////////////
//ელემენტების შეცვლა(მაგ პარაგრაფი შეიცვალოს h1-ით)
// div.replaceChild(newP,p) // ძველი p შეიცვლება newP--ით

let size = 1
p.addEventListener('click',sizeUpper)


isUpper = false // თავიდნ არის false 
function sizeUpper(){
    isUpper = !isUpper
    if(isUpper == true){ //პირველ დაჭერაზე ეს გახდება true
        size += 1
        p.style.fontSize = size + 'rem'
        
    }else{
        size -= 1
        p.style.fontSize = size + 'rem'
    }
    
    console.log(isUpper)
    //იმისთვის , რომ მხოლოდ ერხელ დაქლიქების დროს გაიზარდოს ფოტნი
    //უნდა წავშალოტ ეს addeventlistener-ი
    // p.removeEventListener('click',sizeUpper) // პირველი დაჭერის შემდეგ წაიშლება 
}


