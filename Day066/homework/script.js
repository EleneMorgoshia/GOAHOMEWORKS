//უნდა შევქმნათ რეგისტრაციის და დალოგინების ფუნქციები

//დარეგისტრირებული მომხამრებელების მონაცემებს ვინახავთ სიაში 
//თუ შენხული მონაცემები დაემთხვევა, ლოგინის დროს შეყვანილ მონაცემებს, 
//იუზერი სეძლებს თავის ექაუნთზე შესვლას! 

//თუ მომხმარებელი,რომელიც დარეგისტრირებულია, კვლავ ცდილოს დარეგისტრირებას ვეტყვით რომ ეს იუზერი დარეგისტიტრებულია.
// თუ დალოგიენებისას პაროლია არასწორი, ვეუბნებით რომ პაროლია არასწორი, 
//თუ დალოგინებისას სახელია არასწორი, ვეუბნებით რომ სახელია არასწორი
///////////////////////////////////////////////////////////////////////////////////
// we have to have the access to the html elements 
const regName = document.getElementById('reg-name')
const regPassword = document.getElementById('reg-password')

const logName = document.getElementById('log-name')
const logPassword = document.getElementById('log-password')

const wrongUser = document.getElementById("wrong-user")
const wrongPassword = document.getElementById('wrong-password')

const rightDiv = document.getElementById('right-div')

const userAccountName = document.getElementById('user-Account-Name')
// creating the constructor
function userAccount(name,password){
    this.name = name
    this.password = password
}


//creating the array where the user's information will be saved
let userDataArray = [

]

//creating the registration function
function registration(){
    let name = regName.value 
    let pass = regPassword.value

    //creating object by helping of the consturctor
    let user = new userAccount(name,pass) //user1 ,user2 ,user3 ...........

    //saving the user's information in the  array called - userDataArray
    userDataArray.push(user)
    console.log(userDataArray)

    //clearing the input after the registration
    regName.value = ''
    regPassword.value = ''
}


// creating the login function
function login(){
   
    let userName = logName.value
    let userPass = logPassword.value

   for(let i = 0 ; i < userDataArray.length ; i ++){
        if(userName != userDataArray[i].name && userPass == userDataArray[i].password){
            wrongUser.innerHTML = 'Wrong User Name'
            rightDiv.style.boxShadow = '0px 0px 30px red'
            logName.style.boxShadow = '0px 0px 30px red'

        }else if(userName == userDataArray[i].name && userPass != userDataArray[i].password){
            wrongPassword.innerHTML = 'Wrong Password'
            rightDiv.style.boxShadow = '0px 0px 30px red'
            logPassword.style.boxShadow = '0px 0px 30px red'
        }else if(userName != userDataArray[i].name && userPass != userDataArray[i].password){
            wrongUser.innerHTML = 'Wrong User Name'
            wrongPassword.innerHTML = 'Wrong Password'
            logName.style.boxShadow = '0px 0px 30px red'
            logPassword.style.boxShadow = '0px 0px 30px red'
            rightDiv.style.boxShadow = '0px 0px 30px red'
           
        }else{
            rightDiv.style.boxShadow = '0px 0px 10px green'
            logName.style.boxShadow = '0px 0px 30px green'
            logPassword.style.boxShadow = '0px 0px 30px green'
            userAccountName.innerHTML = logName.value
            wrongUser.innerHTML = ''
            wrongPassword.innerHTML = ''
        }
    }

    logName.value = ''
    logPassword.value = ''
}

