//უნდა შევქმნათ ორი დივი სადაც ფოტოები რენდომულად შეიცვლებიან
//თუ ორ დივში არსებული ფოტო ერთმანეთს დაემთხვევა , მაშინ
// დივებს ზემოთ არსებული ცვლადი(score) მოიმატებს ერთით 
/////////////////////////////////////////////////////////////////////
//we have to have the access to the  html elements 
const leftImg = document.getElementById('left-img')
const rightImg = document.getElementById('righ-img')

const score = document.getElementById('score')

const leftDiv = document.getElementById('left-div')
const rightDiv = document.getElementById('right-div')

const start = document.getElementById('start')

const plusScore = document.getElementById("plus-score")

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
        counter += 1
        score.innerHTML = counter

        //styling the left and the right divs
        leftDiv.style.boxShadow = '15px 15px 20px red'
        rightDiv.style.boxShadow = '15px 15px 20px red'

        //styling the start div
        start.style.boxShadow = '15px 15px 20px red'
        //styling the score div
        plusScore.style.textShadow = '0px 0px 10px red'
    }else{
        leftDiv.style.boxShadow = '0px 0px 10px rgb(0, 0, 131)'
        rightDiv.style.boxShadow = '0px 0px 10px rgb(0, 0, 131)'
        start.style.boxShadow = '0px 0px 10px rgb(0, 0, 131)'
        plusScore.style.textShadow = '0px 0px 10px rgb(0, 0, 131)'
    }
}