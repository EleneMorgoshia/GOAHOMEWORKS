//უნდა მივწვდეთ html ელემენტებს 
const registration = document.getElementById('registration')
const Login = document.getElementById('Login')


const regName = document.getElementById('reg-name')
const regPass = document.getElementById('reg-pass')
const regSurname = document.getElementById('reg-surname')

const logName = document.getElementById('log-name')
const logPass = document.getElementById('log-pass')

const accName = document.getElementById('accName')
// const alert = document.getElementById('alert')
const logInForm  = document.getElementById('LogIn-form')

const header = document.getElementById('header')

const registerAlert = document.getElementById('registerAlert')

const loginAlert = document.getElementById('loginAlert')
//სია , სადაც დაემატება მომხმარებლზე მონაცემები
let accArr = []
let currentAccName 
//constructor
function createAcc(name , pass , surname){
    this.name = name
    this.pass = pass
    this.surname = surname
}

function register(){
    let name = regName.value // შევქმენით ცვლადი,რომელსაც მივანიჭეთ იუზერის მიერ შემოტანილი (name) ცვლადის მნიშვნელობა
    let pass = regPass.value
    let surname = regSurname.value

    if(name == ''){
        registerAlert.innerHTML = 'შეიყვანეთ სახელი'
    }else if(surname == ''){
        registerAlert.innerHTML = 'შეიყვანეთ გვარი'
    }else if (pass == ''){
        registerAlert.innerHTML = ' შეიყვანეთ პაროლი'
    }
    else{
        
        const person = new createAcc(name,pass,surname) // კონსტრუქტორის დახმარებით ვქმნით ობიექტ personს , რომელსაც პარამეტრებად გადავცემთ (იუზერის მიერ შემოტანილი სახეილ , იუზერის მიერ შემოტანილი პაროლი) 
        accArr.push(person)

        console.log(accArr)

        regName.value = ''
        regPass.value = ''
        regSurname.value = ''

        
        //  რეგისტრაციის შემდეგ უნდა გამოჩნდეს ლოგინ ფეიჯი
        registration.style.display = 'none'
        Login.style.display = 'block'
        Login.style.display = 'flex'
    }

   
}




function login(){
    let name = logName.value
    let pass = logPass.value
    let accIndex 

    let isNameCorrect // არის თუ არა შეყვანილი სახელი 
    

    if(logName.value == '' ){
        loginAlert.innerHTML = 'შეიყვანე ექაუნთის სახელი'
        // loginAlert.style.color = 'red'
        // logInForm.style.boxShadow = '0px 0px 10px red'
    }else if(logPass.value == ''){
        alert.innerHTML = 'შეიყვანე ექაუნთის პაროლი'
        alert.style.color = 'red'
        logInForm.style.boxShadow = '0px 0px 10px red'
    }else{
        for(let i = 0 ; i < accArr.length ; i ++){
            if(accArr[i].name == name){ // თუ accArr-ს name(i ინდექსზე მდოგმი - (ანუ თუ რომელიმე სახელი სიიდან ?)) ემთხვევა იმ სახელს , რომელიც ლოგინში შეიყვანა იუზერმა
                isNameCorrect = true
                accIndex = accArr.indexOf(accArr[i])
            }
        }
        if(isNameCorrect == true){
            if(pass == accArr[accIndex].pass){
                header.style.display = 'flex'
                Login.style.display = 'none'
                currentAccName = accArr[accIndex].name[0] + '.' + accArr[accIndex].surname[0]

                accName.innerHTML = accArr[i].name
               
                logName.value = ''
                logPass.value = ''
            }

        }else{
            loginAlert.innerHTML = 'შენი შეყვანილი მონაცემი არასორია '
        }
    }



}

function loginBack(){
    //  რეგისტრაციის შემდეგ უნდა გამოჩნდეს ლოგინ ფეიჯი
    registration.style.display = 'none'
    Login.style.display = 'flex'
}

function regBack(){
    registration.style.display = 'flex'
    Login.style.display = 'none'
}

function exit(){
    header.style.display = 'flex'
    Login.style.display = 'none'
}