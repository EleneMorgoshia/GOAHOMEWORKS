//მეორე დავალების გაუმჯობესება - თუ ორი ფოტო დამეთხვევა ერთმანეთს
// ქვემოთ დაეწეროს love -  გაჩნდეს გული ზემოთ 
//და ათასჯერ დაეწეროს i love you 
////////////////////////////////////////////////////
//we have to have the access to the  html elements 
const leftImg = document.getElementById('left-img')
const rightImg = document.getElementById('righ-img')

const score = document.getElementById('score')

const leftDiv = document.getElementById('left-div')
const rightDiv = document.getElementById('right-div')

const start = document.getElementById('start')

const plusScore = document.getElementById("plus-score")

const scoreDiv = document.getElementById('score-div')

const motherContainer = document.getElementById('mother-container')

const imaginarySection = document.getElementById('imaginary-section')

const textDiv = document.getElementById("text-div")
//creating 2 lists where the images are set 
let leftImgArray = [
    '/Day065/images/1.avif' , '/Day065/images/2.webp' , '/Day065/images/3.avif', '/Day065/images/4.webp' , '/Day065/images/5.webp',
    '/Day065/images/0.avif'

]

let rightImgArray = [
    '/Day065/images/1.avif' , '/Day065/images/2.webp' , '/Day065/images/3.avif', '/Day065/images/4.webp' , '/Day065/images/5.webp',
    '/Day065/images/0.avif'
]

let counter = 0 // creating the variable called - counter

// creating the function called - randomSameImg
function randomSameImg(){
    let leftIndex = Math.floor(Math.random() * leftImgArray.length) // random number from 0 to the length of the leftImgArray
    let rightIndex = Math.floor(Math.random() * rightImgArray.length) // random number from 0 to the length of the rightImgArray

    leftImg.src = leftImgArray[leftIndex] 
    rightImg.src = rightImgArray[rightIndex]

    if(leftIndex == rightIndex){
        scoreDiv.style.display = 'none'
        motherContainer.style.display = 'none'
        start.style.display = 'none'

        imaginarySection.style.display = 'block'

        let text = ''
        for(let i = 0 ; i < 1000 ; i++){
            text += 'i love you <br>'
        } 

        textDiv.innerHTML = text
        textDiv.style.fontSize = '30px'
        textDiv.style.fontFamily = 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    }else{
        leftDiv.style.boxShadow = '0px 0px 10px rgb(0, 0, 131)'
        rightDiv.style.boxShadow = '0px 0px 10px rgb(0, 0, 131)'
        start.style.boxShadow = '0px 0px 10px rgb(0, 0, 131)'
        plusScore.style.textShadow = '0px 0px 10px rgb(0, 0, 131)'
    }
}
