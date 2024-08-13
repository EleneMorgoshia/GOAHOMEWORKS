//უნდა შვექმნათ რეგისტრაციის,დალოგინების და ექაუნთის ფეიჯები
//როცა დარეგისტრირდება, შექმნილ სიაში ჩაიწერება ამ იუზერის მონაცემები 
//ამის შემდეგ გადახტება ლოგინის ფეიჯზე. თუ მონაცემებს შეიყვანს სწორად(თუ ისინი დაემთხვევა სიაში არსებულ მონაცემებს)
//მაშინ ის შევა თავისი ექაუნთის გვერდზე
//////////////////////////////////////////////////////////////////////////
// having the access to the html elements 
const regName = document.getElementById('regName') // Registration Name
const regEmail = document.getElementById('regEmail') // Registration Email
const regPassword = document.getElementById('regPassword') // Registration Passoword

const registrationDiv = document.getElementById('registrationDiv') // registration div
const successfullyReg = document.getElementById('successfullyReg') // successfully registered page

const backToLogin = document.getElementById('backToLogin') // backtologin paragraph
const loginDiv = document.getElementById('loginDiv') // loginDIv

const underName = document.getElementById('underName') //the warning under name
const underEmail = document.getElementById('underEmail') //the warning under Email
const underPassword = document.getElementById('underPassword') //the warning under Password

const logName = document.getElementById('logName') // login name
const logPass = document.getElementById('logPass') //login password

const accountDiv = document.getElementById('accountDiv') // accountpage

const wrongCombination = document.getElementById('wrongCombination') // wrong  username and password 
const wrongUser = document.getElementById('wrongUser') // wrong user
const wrongPassword = document.getElementById('wrongPassword') // wrong password

const registrationParagraph = document.getElementById('registrationParagraph') // registrationParagraph 

const regH1 = document.getElementById('regH1') // registration h1
const regForm = document.getElementById('regForm') // regFORM

const exitBtn = document.getElementById('exitBtn')
//creating the constructor for the registered obiects
function registeredUser(regName , regEmail , regPassword){
    this.regName = regName
    this.regEmail = regEmail
    this.regPassword = regPassword
}


//creating the list for regitered people
let userArray = []

//creating the function called  registration
function registration(){
    const newUser = new registeredUser(regName.value ,regEmail.value , regPassword.value) // creating the person's object
    userArray.push(newUser) // adding the person's information to the userArray list 
    console.log(userArray)


    // if there will be the empty input
    if(regName.value == '' && regEmail.value == ''){
        underName.style.display = 'block'
        regEmail.value = registeredUser.regEmail.value
        regPassword.value = registeredUser.regPassword.value    
    }else if(regEmail.value == ''){
        underEmail.style.display = 'block'
        regName.value = registeredUser.regName.value
        regPassword.value = registeredUser.regPassword.value    
    }else if(regPassword.value == ''){
        underPassword.style.display = 'block'
        regName.value = registeredUser.regName.value
        regEmail.value = registeredUser.regEmail.value
    }else{ // if the inputs are not clear
        registrationDiv.style.display = 'none'
        successfullyReg.style.display = 'block'
        backToLogin.addEventListener('click',function(){
            successfullyReg.style.display = 'none'
            loginDiv.style.display = 'block'
        })
    } // თუ ორი ცალი ინფუთ ველი იქნება შეუვსებელი იმ ერთის მონაცემი რომ დაიტოვო და დანარჩენის ქვეშ გაამწვანოს - როგორ შეიძლება ეგ ბევრი if -ის გარეშე??

    regName.value =''
    regEmail.value = ''
    regPassword.value = ''

}



//creating the  function called login
function login(){
    for(let i = 0 ; i < userArray.length ; i ++){ // Using a loop to check user data in the userArray
        if(userArray[i].regName  == logName.value && userArray[i].regPassword == logPass.value){ 
            loginDiv.style.display = 'none'
            accountDiv.style.display = 'flex'
            accountDiv.style.marginLeft = '1200px'
        }else if(userArray[i].regName != logName.value  &&  userArray[i].regPassword == logPass.value){ // user - wrong ; pass - correct
            wrongUser.style.display = 'block'
            logPass.value = logPass.value//  Pass(correct) input will be displayed 
        }else if(userArray[i].regName == logName.value  &&  userArray[i].regPassword != logPass.value){//user - correct ; pass - wrong
            wrongPassword.style.display = 'block'
            logName.value = logName.value // name(correct) input will be displayed 
        }else{
            wrongCombination.style.display = 'block'
            console.log('wrong')
        } // ამის უფრო მოკლედ ჩაწერის ვარიანტი როგორია? 
    }
   
}


//link for registration paragraph
registrationParagraph.addEventListener('click',function(){
    loginDiv.style.display = 'none'
    registrationDiv.style.display = 'block'
    registrationParagraph.style.cursor = 'pointer'
    registrationDiv.style.marginLeft = '100px'
    regH1.style.marginLeft = '50px'
    regForm.style.marginLeft = '50px'
})


//function for exit button 
exitBtn.addEventListener('click',function(){
    accountDiv.style.display = 'none'
    loginDiv.style.display = 'block'
})