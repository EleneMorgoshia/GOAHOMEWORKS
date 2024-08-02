//object constructor

let person1 = {
    name: 'Elene',
    age: '20',
    surname: 'Morgoshia',
    work : 'developer'
}

let person2 = {
    name: 'gabrieli',
    surname: 'Molodini',
    age : '100',
    work: 'developer'
}

let person3 = {
    name: 'cotne',
    surname: 'sartania',
    age: '27',
    work: 'ideisti'
}

//constructor
function person(name, surname,age,work){
    //ტოლობის მარცხენა მხარეს - properties
    //ტოლობოს მარჯვენა მხარეს - value - პარამეტრად რასაც გადმოსცემს იუზერი 
    this.name = name
    this.surname = surname
    this.age = age
    this.work = work 
}


// new - იქნება ახალი ობიექტი
const person4 = new person('Elene','sazinashvili','22','developer')
console.log(person4)
console.log(person4.name) // დაბეჭდავს სახელს 
////////////////////////////////////////
// classwork:შექენით ობიექტის კონსტრუქტორი. მისი გამოყენებით
//შექმენით  ობიექტები 10 ადამიანის(ჯგუფში არსებული ადამიენების)
//და დაბეჭდეთ ყველადერი კონსოლში 

function group4Member(name,surname,age){
    this.name = name 
    this.surname = surname
    this.age = age
}

let member1 = new group4Member('Elene','Morgoshia','20')
let member2 = new group4Member('nino','solomonia','30')
let member3 = new group4Member('cotne','sartania','27')
let member4 = new group4Member('Dachi','Sazandrishvili','17')
let member5 = new group4Member('ana','giorgadze','19')
let member6 = new group4Member('like','pruidze','24')
let member7 = new group4Member('Rostom','Chagunava','35')
let member8 = new group4Member('luka','kechexmadze','16')
let member9 = new group4Member('luka','siradze','21')
let member10 = new group4Member('saba','vaxtangadze','15')

console.log(member1,member2,member3,member4,member5,member6,member7,member8,member9,member10)