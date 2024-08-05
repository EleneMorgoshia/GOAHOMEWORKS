// დავალება1 - ჩვენ უნდა გვქონდეს 3 ინფუთი,საიდანააც შემოიტანს მომხმარებელი სახელს,გვარს და ასაკს.
//და ღილაკი,რომელიც შექმნის ამ ყველაფრიდან ობიექტს . ეს ყველაფერი უნდა გამოვსახოთ
//გვერდზე ფანჯარაში(სახელი,გვარი,ასაკი) - აქვე უნდა იყოს კითხვა( გსურთ დროში მოგზაურობა?) 
// confirm- ით კიდევ ვეკითებით სურს თუ არა 
// თუ სურს, მაშინ ახალ ფეიჯზე გადავდივართ , სადაც მომხმარებელს შემოყავს , 
//თუ რანდენი ხნით უნდა მოგზაურობა და ამ ინფუთის ქვემოთ იქნება ღილაკი( საბმითი - ვიზუალურად საშიში)
// თუ დააჭერს ამღილაკს დატრიალების ანიმაცია გვინდა და იმ ფეიჯზე უნდა იყოს რომელ წლში მოხვდა
//და რამდენი წლის იქნება  ის ამ პერიოდში  
// დავალება2 - რაც კლასში გავაკეთეთ ეგ,ოღონდ თუ 10ზე ნაკლებია წამი,მაში ნწინ ნული დაემატოს
///////////////////////////////////////////////////////////////////////////
//we have to have the access to the html elements

const regName = document.getElementById('reg-name')
const regSurname = document.getElementById('reg-surname')
const regAge = document.getElementById('reg-age')

const infoName = document.getElementById('info-name')
const infoSurname = document.getElementById('info-surname')
const infoAge = document.getElementById('info-age')

const userInfo = document.getElementById('user-info')
const aboutUser = document.getElementById('about-user')
const timeTravel = document.getElementById('time-travel')

const travleTime = document.getElementById('travle-time')

const age = document.getElementById('age')

const resultYear = document.getElementById('result-Year')
const resultAge = document.getElementById('result-Age')

const result = document.getElementById('results')
//creating the constructor where the parameters are the user's inputs 
function user(regName , regSurname , regAge){
    this.name = regName.value
    this.surname = regSurname.value
    this.age = regAge.value


}

//creaing the function called information
function information(){
    //creating the object 
    const person = new user(regName , regSurname , regAge)
    
    //writing the user's information in spans
    infoName.innerHTML = person.name
    infoSurname.innerHTML = person.surname
    infoAge.innerHTML = person.age

}


//creating the function called question
function question(){
    let askedQuestion = confirm('Are you sure you want to try time traveling?')
    if(askedQuestion == true){
        userInfo.style.display = 'none'
        aboutUser.style.display = 'none'
        timeTravel.style.display = 'block'
        timeTravel.style.paddingLeft = '30px'

        
    }
}


//creating the function called - timeMaching
function timeMachine(){
    timeTravel.style.display = 'none'
    result.style.display = 'block'
    const currentDate = new Date() // current time 
    
    let year = currentDate.getFullYear() // current year(2024)


    const difference = travleTime.value - year // difference between the user's given year and the current year 

  
    let changedUserAge = Number(age.value) + Number(difference)  

    if(changedUserAge < 0){
        resultYear.innerHTML = travleTime.value
        resultAge.innerHTML = -1 * changedUserAge 
    }

    resultYear.innerHTML = travleTime.value
    resultAge.innerHTML = changedUserAge 
    

}