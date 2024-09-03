//Rest და Spread ოპერატორები javascript-ში.

//Rest ოპერატორი გამოიყენება ფაუნქიცების პარამეტრების დასამატებლად - gamoiyeneba m.x.o.l.o.d funqciebshi
const handleRest = (newItem , ...newNames) => {
    const newArray = [newItem , ...newNames]
    console.log(newArray)
}
//rest - ფუნქციებში ამატებს უასრულო რაოდენობის პარამეტერეს(ლისთში აგდებს მათ)
handleRest("daviti" , "giorgi",'shalva','berdia','luka')
//////////////////////////////////////////////////////////////
// Spread ოპერატორი 

//spread - ოპერატორი გამოიყენება მასივის ან ობექტების გასაფართოებლად 
const numbers = [1,2,3]
const  newNumbers = [...numbers, 4 ,5 ] // მასივში ვაშენებთ სასურველ მასივს(აქამდე შექმნილი)
const newItems = [...numbers] 
console.log(newNumbers)
//////////////////////////

// Spread in objects
const newArrayForObj = [1,2,3,4,5,6,7,8]
const newObj = {
    ...newNumbers
}
//შეგვიძლია მაივის გარდაქმნა ობიექტად 
console.log(newObj)

const person = {
    name:'john',
    job:'Developer'
}

const newPerson = {...person, age:'30'}
console.log(newPerson)
//////////////////////////////////////
//classwork : შექმენით ორი ფუნქცია სადაც გამოიყენებთ rest  და spread  ოპერატორებს
//Reset - ის მაგალითი ( ფუნქციას ვქმნით, პარამეტრებად გდავცემთ უსასრულოდ სასურველ მნიშვნელობებს და მერე სიაშ ივამატებთ მას)
const plusFuncion = (num1, num2,...num) =>{
    const newArray = [num1 , num2 , ...num]
    console.log(newArray)
}

(plusFuncion(1,2,3,5,9,10))

//spread -ის მაგალითი ( შევქმენით ლისთი სადაც ჩავწერეთ სამი სტრინგი(სახელები).ქვემოთ ვქმნით ახალი ლისთს, სადაც 
//სფრედის გამოყენებთ ძველ ერეის ვამატებთ პირდაპირ ახალი ლისთში და ვამატებთ კიდევ ახალ სახელებს)
const personNames = ['elene','niko','sandro']
const newPersonNames = [...personNames , 'lizi','koki']
console.log(newPersonNames) 

const personData = {
    firstName : 'Elene',
    lastName: 'Mogrgoshia'
}

const newPersonData = {
    ...personData,
    age:'20'
}

console.log(newPersonData)
/////////////////////////////////////////////
//ვქმნით ფუნაციას ,რომელიც დაქლიქდება და დაემატება რიცხვები,მასივები...
const sec = document.querySelector("section")


let array = []
let counter = 0
const btn = document.querySelectorAll('button') // queory selector - ნებისმიერეი სხახის ელემენტებს წარმოადგენს მასივის სახით

const paragraph = document.querySelectorAll("p")


const rander =() =>{
    const newItem = document.createElement('p')
    newItem.textContent = 'text'
    sec.appendChild(newItem)
}

btn[0].addEventListener('click',() => {
    counter++
    let newArray = []
    newArray.push(counter)

    array = [...counter , ...newArray]
    
    console.log(array)
    rander()
})

// console.log(counter)
btn[1].addEventListener('click',()=> {
    counter--
    let newArray = []

    array = [...counter , ...newArray]
    // array.shift() // ერეიში შლის პირველ ელემენტს
    array.pop(-1) // pop - შლის ერეის ბოლო ელემენტს
    console.log(array)
})