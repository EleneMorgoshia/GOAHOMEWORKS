// let acc = []

// let person1 = {
//     name:'elene',
//     age:'20'
// }
// let person2 = {
//     name:'nika',
//     age:'20'
// }
// let person3 = {
//     name:'erekle',
//     age:'20'
// }
// let person4 = {
//     name:'koki',
//     age:'20'
// }
// let person5 = {
//     name:'ioane',
//     age:'20'
// }

// acc.push(person1)
// console.log(acc)
////////////////////////////////////////////////////
//უნდა მივწვდეთ html ელემენტებს 
const regName = document.getElementById('reg-name')
const regPass = document.getElementById('reg-pas')

const logName = document.getElementById('log-name')
const logPass = document.getElementById('log-pass')

const accName = document.getElementById('accName')
const alert = document.getElementById('alert')
const logInForm  = document.getElementById('LogIn-form')
//სია , სადაც დაემატება მომხმარებლზე მონაცემები
let accArr = [
    person = {
        name : 'gabrieli',
        pass: '123'
    },
]

//constructor
function createAcc(name , pass){
    this.name = name
    this.pass = pass
}

function register(){
    let name = regName.value // შევქმენით ცვლადი,რომელსაც მივანიჭეთ იუზერის მიერ შემოტანილი (name) ცვლადის მნიშვნელობა
    let pass = regPass.value

    const person = new createAcc(name,pass) // კონსტრუქტორის დახმარებით ვქმნით ობიექტ personს , რომელსაც პარამეტრებად გადავცემთ (იუზერის მიერ შემოტანილი სახეილ , იუზერის მიერ შემოტანილი პაროლი) 
    accArr.push(person)

    console.log(accArr)

    regName.value = ''
    regPass.value = ''
}

function login(){
    let name = logName.value
    let pass = logPass.value
   
    if(logName.value == '' ){
        alert.innerHTML = 'შეიყვანე ექაუნთის სახელი'
        alert.style.color = 'red'
        logInForm.style.boxShadow = '0px 0px 10px red'
    }else if(logPass.value == ''){
        alert.innerHTML = 'შეიყვანე ექაუნთის პაროლი'
        alert.style.color = 'red'
        logInForm.style.boxShadow = '0px 0px 10px red'
    }else{
        for(let i = 0 ; i < accArr.length ; i ++){
            if(accArr[i].name == name){ // თუ accArr-ს name(i ინდექსზე მდოგმი - (ანუ თუ რომელიმე სახელი სიიდან ?)) ემთხვევა იმ სახელს , რომელიც ლოგინში შეიყვანა იუზერმა
                if(pass == accArr[i].pass){ // თუ დალოგინებული პასვორდი ემთხვევა სიაში არსებულ i ინდექსზე მდომგ პაროლს 
                    accName.innerHTML = accArr[i].name // spanში ჩაიწერებე ის სახელი , რომელი სიაში არის შენხული 
                    logName.value = ''
                    logPass.value = ''
                }
            }else{
                alert.innerHTML = 'ექაუნთის სახელი არასწორია'
                alert.style.color = 'red'
                logInForm.style.boxShadow = '0px 0px 10px red'
            }
           
    
        }
    }

}