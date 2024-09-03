//ES6 object 
//oject - მონაცემთა ტიპი , სადაც გვაქვს წყვილი key სა და value-სი
//გამოიყენება იმისთვის, რომ რამდენიმე ცვალდის მნიშვნელობა შევინახოთ
//მაგ:

const myObj = {
    name : 'Elene',
    surname: 'Morgoshia',

    //creating method
    myFunc: function(userName) {
        console.log(this.surname) //იმის მაგივრად რომ ვწეროთ myObj.name  ვიყენებტ this, რომელიც წვდება თავის მშობელს(ანუ myObj)
        this.name = userName
    } 
}

console.log(myObj.name) // ძველი სახელი
myObj.myFunc('Nikusha') // ფუნქცია,რომელიც სახელს უცვლის მნიშვნელობას
console.log(myObj.name) // ახალი სახელი 
////////////////////////////////////////////////////////
//შექმენით სამი ინფუთ ველი , საიდანაც მომხმარებელი შემოიტანს
// სახელს,ნომერი და პაროლი . ამ მონაცემებით შექმენით ობიექტი , სადაც შეინახავთ მომხმარებლის ინფორმაციას.
//იქვე ინფუთებთან იყოს პატარა div , სადაც გამოჩნდება მომხმარებლის მონაცემები , რომლებსაც ქვემოტ ეწერება :შეცვალე სახ, შეხვალ ნომ, შეცვალე პასვორდი
//ამათზე დაჭერისას შეიყვანოთ ახალი მონაცემი  და ობიექტში შექმნათ მეთოდი
//რომელიც შეცვლის არსებულ ობიექტში მონაცემების მნიშვნელობას
//და გადასცემს ახალ შეყვანილ მონაცემებს.  

//elements from the html document
const enteredName = document.getElementById('enteredName') // Entered NAME
const enteredNumber = document.getElementById('enteredNumber') // Entered Number
const enteredPassword = document.getElementById('enteredPassword') // Entered Password
const clickBtn = document.getElementById("clickBtn") // submit button

const middleName = document.getElementById("middleName") // span name
const middleNumber = document.getElementById("middleNumber") // span number
const middlePass = document.getElementById("middlePass") // span  password

const changebtn = document.getElementsByClassName("changebtn") // change buttons 
//creating object
let obj = {
    userName: 'user',//default  value
    userPass: 'useruser', //default value

    changeName: function(name2){
        this.userName = name2
        middleName.innerHTML = this.userName 
    }
    ,
    changePass: function(pass2){
        this.userPass = pass2
        middlePass.innerHTML = this.userPass
    }
}

//() => {} - arrow function's syntax
clickBtn.addEventListener('click', () => {
    // obj.userName = enteredName.value
    // obj.userPass = enteredPassword.value

    // middleName.innerHTML = enteredName.value 
    // middlePass.innerHTML = enteredPassword.value
    obj.changeName(enteredName.value)
    obj.changePass(enteredPassword.value)
})



changebtn[0].addEventListener('click',()=>{
    let name2 = prompt('change your name')
    obj.changeName(name2)
})

changebtn[1].addEventListener('click',() => {
    let pass2 = prompt('change password')
    obj.changePass(pass2)
})