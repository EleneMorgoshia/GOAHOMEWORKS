//დავალება1: კლასში დავალება ( back და start ით ოღონდ)

//we have to have the access to the desired Html elements
const back = document.getElementById('back')
const img = document.getElementById('img')
const next = document.getElementById('next')

//creating the array where the images are set 
imageArray = ['/Day065/images/image-2.webp' , '/Day065/images/image-3.jfif' , '/Day065/images/image-4.jfif' , '/Day065/images/image-5.webp' ,'/Day065/images/image-1.jpg']

//creating the variable called counter that equals to 0 
let counter = 0

//creating the function called - nextImg
function nextImg(){
    counter += 1
    img.src = imageArray[counter]
}

//creating the function called - backImg
function backImg(){
    counter -= 1
    img.src = imageArray[counter]
}