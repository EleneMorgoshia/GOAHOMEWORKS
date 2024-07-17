//შექმენი პარაგრაფები , ყველა პარაგრაფს მიწვდი javascript-იდან
//აიღე ერთნაირი კლასის მქონე ელემენტები და შეუცვალე კონტენტი
//აიდის მქონე ელემენტს შეუცვალე კონტენტი

let changedById = document.getElementById('special-item')
changedById.innerHTML = 'CHANGED-ITEM-BY-ID '

let changeByClassName = document.getElementsByClassName('By-class')
changeByClassName.innerHTML = 'do it'

///////////////////////////////////////////////////////////
// როგორ შევცვალოთ javascriptიდან ელემენტების სტილი

// const firstParagraph = document.getElementById('first-paragraph')
// const div = document.getElementById('container')

// firstParagraph.innerHTML = 'hello'
// firstParagraph.style.color = 'red'
// firstParagraph.style.fontSize = '2rem'
// firstParagraph.style.margin = '50px'

// div.style.display = 'flex'
// div.style.justifyContent = 'center'
// div.style.alignItems = 'center'
// div.style.padding = '20px'

let paragraph = document.getElementsByTagName('p')
const div = document.getElementById('container')

let isDefault = true
function changeColor(){
    isDefault = !isDefault
    let paragraph = document.getElementsByTagName('p')
    const div = document.getElementById('container')

    for(let i = 0; i < paragraph.length ; i++){
        paragraph[i].innerHTML = 'hello'
        paragraph[i].style.color = 'red'
        paragraph[i].style.fontSize = '2rem'
        paragraph[i].syule.margin = '50px'
    }

    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
}

changeColor()

function Default(){
    for(let i = 0; i < paragraph.length ; i++){
        paragraph[i].innerHTML = 'hello'
        paragraph[i].style.color = '#000'
        paragraph[i].style.fontSize = '1rem'
        paragraph[i].syule.margin = '0'
    }

    div.style.display = 'block'
}

function shemowmeba(){
    if(isDefault == true){
        changeColor()
    }else{
        Default()
    }
}