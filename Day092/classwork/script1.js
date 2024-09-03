//arrow function
//ternary operators
//loop
//object assign 
////////////
//დესტრუქცია - destructuring -  დაშლა
let arr = [1,2,3,4,5,6]

let num1 = arr[0]
let num2 = arr[1]
let num3 = arr[2]
let num4 = arr[3]

console.log(num1)

let newArr = ['Elene','Nikusha','Sandro','Ioane']
// let mentor = newArr[0]
// let assistant = newArr[2]


//რიგითბის მიხედვით mentor მიიღბს სიაში არსებული პირველი ელემენტის მნიშნელობას
//assistant- მიიღებს სიაში არსებულ მეორე მნიშვნელობას 
let[mentor , assistant, student] = newArr
console.log(mentor)
console.log(student)


let obj = {
    name:'Koki',
    work:'Doctor',
    age: '23'
}

let{name , work} = obj //იმ ფროფერთიების სახელები უნდა გადავცე , რომლის დესტრუქციაც მინდა - 
//აქ თანმიმდევრობას მნიშვნელობა არ აქვს 
console.log(name)
console.log(work)
/////////////////////////////////////////////////////
const btn = document.getElementById("btn") //
const counter = {
    value: 0 ,
    changeValue: function(newNumValue){ 
        this.value = newNumValue
    }
}

counter.numUpdate(5)
console.log(counter.num)


console.log(changeValue)

btn.addEventListener('click',() => {
    const {value, changeValue} = counter
    changeValue(5)
    console.log(obj.value)
})

////////////////////////////////
const persons = [
    {
        names: 'meraba' ,
        works : ' developer'
    } ,

    {
        names: 'tengiza',
        works: 'architector'
    },
    {
        names: 'jejiaant qrtion',
        works: 'housekeeper'
    },
    {
        name:'mayvala',
        work : 'svarchika'
    }
]

const [person1 , person2 , person3] = persons

console.log(person1)
const {names: person1Name,works: person1Work} = person1 
const {names:person2Name , works:person2Work} = person2
const {names: person3Name,works: person3Work} = person3
const {names: person4Name,works: person4Work} = person4
console.log(person2Name) // დაიბეჭდება person2-სი name