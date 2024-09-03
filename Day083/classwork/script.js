//for loop es6
const myList = [1,2,3,4,5]

const myList2 = 5 //ამის სიგრძე ვერ გავზომავთ
const anotherArray = {
    name:'Elene',
    age:20
}

// console.log(anotherArray.name.length)

// for(let i = 0 ; i < myList.length ; i++){
//     console.log(myList[i])
// } 

for(let elements of myList){
    console.log(elements) // 
}
// ასეთი for  გამოიყენება  ისეთი ელემენტებოსთვის,რომელთა  დათვლა შესაძლებელია
///////////////////////////////////////////////////////////////
//classwork
//ინფუთიდან მომხმარებელს შემოატანინეთ სახელი,ღილაკზე დაჭერის დროს.
//შემდეგ ეს ყველა სახელი შეინახეთ ერთ სიაში.
//დაამატეთ მეორე ინფუთი, სადაც შეიყვანს სახელს და მეორე ღილაკი
//რომწლზე დაჭირს დროსაც მოძებნის ჩვენს სიაში თუ არის ასეთი სახელი და თუ არის დაბეჭდოს რომ არის
//თუ არადა დაბეჭდოს რომ არ არის 

//having the access to the html elements
const getName = document.getElementById('getName') // first input
const findName = document.getElementById('findName') // findName
const result = document.getElementById('result') // result span

// creting the list for names
let namesArray = []

// creating the function called pushname
function pushname(){
    namesArray.push(getName.value)
    console.log(namesArray)
}

//creating the function called find
function find(){
    for(let elements of namesArray){
        if(elements == findName.value ){
            result.innerHTML = 'there is your name in my list'
            result.style.color = 'red'
        }else{
            result.innerHTML = 'there is not your name in my list'
            result.style.color = 'red'
        }
    }
}

///////////////////////////////////////////
let obj = {
    name1: 'Elene',
    name2: 'Koki',
    name3: 'Nikolozi',
    name4: 'natali'
}

//for of - არ მუშაობს უთვლად ელემენტებზე 

for(let elements in obj){
    console.log(elements) // გამოიტანს name1 ,name2,name3,name4
    console.log(obj[elements]) // გამოიტანს სხელების მნშვნელობებს (ელენე,კოკი,ნიკოლოზი,ნატალი)
    if(obj[elements] == 'Nikolozi'){
        console.log('YES,THERE IS YOUR NAME')
    }
}