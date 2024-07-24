
//იმისთის რომ ვიმოქმედოთ სასრუველ ელემენტებზე html-ში , მათ უნდა მივწვდეთ შემდეგნაირად: 

//ვქმნით ცვლადებს, რომელშიც ვინახავთ input-ებს.(ანუ მომხმარებელმა სადაც უნდა შემოიტანოს მონაცემი)
const userName = document.getElementById('userName')
const userSurname = document.getElementById('userSurname')
const userPass = document.getElementById('userPass')

//ვქმნით ცვლადებს, რომლებშიც ვინახავთ პარაგრაფებში არსებული სპანებს
const name = document.getElementById('name')
const surname = document.getElementById('surname')
const password = document.getElementById('pass')

//ვქმნით ცვლადს , სადაც ვინახავთ ღილაკს
const submit = document.getElementById('submit')

//ვქმნით ობიექტს , რომელშიც არის სამი სხვადასხვა ფროფერთი თავისი მნშვნელობებით ( მნიშვნელობებია- მომხმარებლის მიერ შემოტანილი მონაცემები)
let object = {
    //პარაგრაფებში არსებულ სპანებში ვინახავთ input -ებს 
    name:userName,
    surname: userSurname,
    password:userPass 
}

let isSubmit = false // ბულეან ტიპისს ცვლადი( არის თუ არა დაჭერილი ღილაკზე). მნიშვნელობა - false ( ანუ არ არის დაჭერილი ღილაკზე)

//ფუნქცია, რომელსაც ინფუთებიდან მოაქვს ინფორმაცია და ამატებს მეორე section-ში( კონკრეტულად- სპანების ადგილას)
//submit-ზე დაჭერისას , User Name -ის უნდა მიეწეროს name-ში შენახული value
//User Surname-ს უნდა მიეწეროს surnameის value
//user password-ს უნდა მიეწეროს password-ის value
function func(){
    name.innerHTML = object.name.value,    // პარაგრაფში არსებული სპანის  ადგილას ჩაეწერება userNameის value , ანუ იუზერის მიერ შემოტანილი ინფო
    surname.innerHTML = object.surname.value,
    password.innerHTML = object.password.value

    //ინფუთში ჩაწერილი მონაცემები რომ გაქრეს,მას  შემდეგ რაც დაასაბმითებს იუზერი თავის თავდაპირველ მოანცემებს 
    userName.value = ''
    userSurname.value = ''
    userPass.value = ''

    //submit vs reset
    isSubmit = !isSubmit // როდესაც ფუნქცია გაიშვება, isSubmit -ის მნისვნლობა შეიცვლეა და გახდება მისი საპირისპირო ( true)
    ////პირველ დაჭერაზე isSubmit -ში შეინახება true, და შემდეგ isSubmit გახდება false , ანუ იმუშავებს else -ის პირობები
    if(isSubmit == true){// თუ isSubmit არის true,
        submit.innerHTML = 'reset' // submit ჩანაცვლდება reset-ით
    }else{ // თუ isSubmit არის false,
        submit.innerHTML = 'submit'//  reset ჩანაცვლდება submit-ით
    }
}


//პაროლის შეცვლის ფუნქცია ( როდესაც პარაგრაფს(change password)-ს დავაქლიქებთ , ეს ფუნქცია გამოიძახება)
function changePass(){
    //ვქმნით confirm-ს და ვეკითხებით სურს თუ არა პაროლის შესვლა
    let passQuestion = confirm('გსრუთ პაროლის შეცვლა?')
    
    if(passQuestion == true){ // თუ მას სურს პაროლის შეცვლა
        let oldPass = prompt('შეიყვანეთ ძველი პაროლი') // ვეკითხებით ძველ პასვორდს
        if(oldPass ==  password.innerHTML ){ //თუ ძველი პაროლი გაუტოლდება  , იუზერის მიერ შეყვანილ პაროლს
            let newPass = prompt('შეიყვანეთ ახალი პაროლი') // ვეკითხებით ახალ პაროლს
            object.password = newPass // ობიექტში არსებული პაროლის ფროფერთის value შეიცვლება ახალი პაროლით
            password.innerHTML= object.password  //ძველი პასვორდის ადგილას ჩაიწერება ახალი პაროლი (ჩანაცვლდება)
        }
    }
}