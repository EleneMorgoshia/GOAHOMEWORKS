// // ელემენტების შექმნა ჯავასკრიპტიდან

// const body = document.getElementsByTagName('body') // მივწვდით html ტეგს(body-ს)

// const paragraph = document.createElement('p') // პარაგრაფის შექმნა

// const textNode = document.createTextNode('Hello') // ტქსტი , რომელიც დაემატება პარაგრაფს

// // ტქსტის დამატება პარაგრაფს
// paragraph.appendChild(textNode) 

// body[0].appendChild(paragraph) //ფეიჯზე გამოვაჩინოთ პარაგრაფი
///////////////////////////////////////////////
//მინი პროექტი
// const image = document.createElement('img')
// console.log(image)
// image.src = '/Day065/images/heart-icon.jpg'
// body[0].appendChild(image)
//////////////////////////////////////
//მინი პროექტი
const addBtn = document.getElementById("addBtn")
const heart = document.getElementById('heart')
const ul = document.getElementById('ul')
const body = document.getElementsByTagName('body')

addBtn.addEventListener('click',function(){
    let li = document.createElement('li') // li-ს ვქმნით ,რომელსაც ჩავაგდეთ ul-ში
    let img = document.createElement('img') // ვქმნით img-ს
    let hr = document.createElement('hr')
    hr.style.width = '20px'
    hr.style.color = 'red'
    hr.style.margin = '5px '
    img.src = heart.src // ფოტოში ჩაჯდება ჩვენი heart -ის მისამართი 
    // img.width = '20' // ორივე შეილძლება
    img.style.width = '20px'
    li.appendChild(img) // li-ში ჩაემატება ფოტო
    ul.appendChild(li) //body-ში ჩაემატება li (ანუ ეკრანზე გამოვა ეს ფოტო)
    ul.appendChild(hr)
})