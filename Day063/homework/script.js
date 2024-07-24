//დავალება: მომხმარებელს ვეკითხებით სახელს,გვარს, პაროლს
//ვქმნით სივრცეს,სადაც დავინახავთ იუზერის მიერ შემოყვანილ ინფორმაციას
//ასევე უნდა შევქმნათ პაროლის აღდგენის ფუნქცია
//დასაბმითების დროს ინფუთები უნდა იყოს ცარიელი
// submit vs reset -იც უნდა განვსაზღვროთ
//2) დამატებით ფუნქციონალი: თუ სპანები სიცარიელეა reset-ად არ უნდა გადაკეთდეს
//სხვა შემთხვევაში გადაკეთდეს
///////////////////////////////////////////////////////////////////////////////////////////

//იმისთვის, რომ მივწვდეთ htmlში არსებულ ელემენტებს, ვიქცევით შემდეგნაირად

//იუზერის მიერ შემოტანილი მონაცემები
const userName = document.getElementById('userName')
const userSurname = document.getElementById('userSurname')
const userPassword = document.getElementById('userPassword')

//პარაგრაფში არსებული სპანები 
const resultName = document.getElementById('resultName')
const resultSurname = document.getElementById('resultSurname')
const resultPassword = document.getElementById('resultPassword')

// submit ღილაკი 
const click = document.getElementById('click')

//ვქმნით ობიექტს, სადაც ვინახავთ მომხმარებლის მონაცემებს
let person = {
    personName:userName,
    personSurname:userSurname,
    personPassword:userPassword
}


//ვქმნით ფუნქციას, რომელიც სპანებში წერს იუზერის მიერ შემოტანილ ინფოს
function data(){
    resultName.innerHTML = person.personName.value,
    resultSurname.innerHTML = person.personSurname.value,
    resultPassword.innerHTML = person.personPassword.value

    //submit-ის რომ დავაქლიებთ, ინფუთებში არსებული მონაცემები უნდა გაქრეს
    userName.value = ''
    userSurname.value = ''
    userPassword.value = ''


    //თუ სპანები ცარიელია buttonში იქნება Submit , თუ სპანები არ არის ცარიელი button-ში იქნება Reset
    let clearSpan = resultPassword.innerHTML == '' &&  resultSurname.innerHTML == '' && resultPassword.innerHTML == ''
    if(clearSpan == true){ 
        click.innerHTML = 'Submit'
    }else{
        click.innerHTML = 'Reset'
    }
}


//პაროლის შეცვლის ფუნქცია
function changePassword(){
    //ვეკითხებით მომხამრებელს სურს თუ არა პაროლის შეცვლა
    let newPass = confirm('გსრუთ პაროლის შეცვლა?')
    if(newPass == true){
        let oldPass = prompt('შეიყვანეთ ძველი პაროლი:')
        if(oldPass == resultPassword.innerHTML){
            let newPass = prompt('შეიყვანეთ ახალი პაროლი')
            person.personPassword = newPass
            resultPassword.innerHTML = person.personPassword
        }
    }
}

