console.log('Hello World') 

// creating a variable
var name = 12 // var - key word (var = variable)
console.log(name)

//////////////////////////////
// key words
//var
//let
// const - unchangeable variable
////////////////////////////////

//////////////////////////////
//variable types
//str - string
//number - numbers ( same as int)
/////////////////////////////


//creating other variables
let myName = 'ELENE' // Camel case ; let - key word
let myAge = 10 
let floatNumber = 10.5
console.log(myName, myAge)

//creating a variable of bool type
let isAccepted = true // true - lower-case letters 


//type -function 
console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof floatNumber) // there is no difference between the  number and the float type of variables

console.log('My name is ' + myName ,'I am ' + myAge + ' years old ')

// working on the const type of  variable
const num1 = 5 
//num1 = 6 // error - num1 is not changable as it has const key word
console.log(num1)

//classwork
// შექმენით რამდენიმე ცვლადი: თქვენი სახელი,ასაკი,დაბ-დღის რიცხვი(ეს უნდა იყოს მუდმივი,მისი შეცვლა არ უნდა შეიძლებოდეს)

let myFirstname = 'Elene'
let age = 19
const birthDay = 20 
console.log('My name is ' + myFirstname , 'I am ' + age + ' years old' , 'my birth date is : ' + birthDay)
////////////////////////////////////////
console.log('elene' * 5) //NaN


////////////////////////////
// examples
console.log('10' - 2) //8
console.log('5' + 2) //52
console.log('5' * 2) //10 
console.log('100' / 2) //50

let num = '5'
let sum = num - 2
console.log(typeof sum)


//////////////////
// if else

let number = 9

if(number <  5){
    console.log('patara kaci ')
}else if(age < 18){
    console.log('shen xar arasrulwlovani')
}else{
    console.log('shen xar srulwlovani')
    console.log('i do not like javascript')
}

//////////////////
console.log(5 === '5') // ===  - ,mkacri toloba( mkacrad adarebs ertmanets - am shemtxvevashi string 5 da num 5 ar aris toli )
console.log(5 >= '5')

if('5' === 5){
    console.log('martali')
}else{
    console.log('sicrue')
}

/////////////////////
//length of the string
let text = 'hello World'
console.log(text.length)

///////////////
//converting string to number and numebr to string
let num2 = '5'
let num3 = Number(num2) 
let num4 = String(num3)

console.log(typeof num2)
console.log(typeof num3)
console.log(typeof num4)
