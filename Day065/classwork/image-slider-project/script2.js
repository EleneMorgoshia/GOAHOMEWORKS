//changing img from the javascript
//we have to have the access to the particular HTML element
const image = document.getElementById('img')

image.src = '/Day030/images/pic-2.jpg' // variable name . src - the image that will replace the old one 

let imgArray = ['/Day030/images/pic-3.jpg', '/Day030/images/pic-4.jpg','/Day030/images/pic-5.jpg','/Day030/images/pic-6.jpg','/Day030/images/pic-7.jpg']

function next(){
    let index = Math.floor(Math.random() * imgArray.length)
    img.src = imgArray[index]
}

