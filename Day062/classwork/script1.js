//confirm
// let bool = confirm('are you sure ?')
// console.log(bool)

//classwork
//მომხმარებელს შემოატანინეთ ბანკის მონაცემები.+ ამ მონაცემებით შექმენით ობიექტი,+
//უნდა კითხოთ სურს თუ არა პაროლის შეცვლა, 
//თუ პასუხი იქნება კი , შეეკითხოთ ახალი პაროლი და შეცვალოთ
//ასევე ეს პაროლი უნდა შეიცვალოს ობიექტშიც .
//საბოლოოდ უნდა დაიბეჭდოს ეს ყველა მონაცემი ერთად 
//( გამოიყენეთ [] და . -იც )


//მომხმარებელს შემოვატანინოთ მონაცემები
let userName = prompt('Enter your Username:')
let lastName = prompt('Enter your lastname:')
let ID = prompt('Enter your Id ')
let password = prompt ('Enter you password')

//ვქმით ობიექტს
let bankUser = {
    bankName : userName ,
    banklastName : lastName,
    bankId : ID,
    bankPs : password
}

//სურს თუ არა პაროლის შეცვლა 
let changePs = confirm('Do you want to change your password?')
console.log(changePs)

//პაროლის შეცვლის ფუნქცია
function changingPassword(){
    if(changePs == true){
        let newPs = prompt('Enter your new passowrd:')
        bankUser.bankPs = newPs
        console.log(bankUser)
    }else{
        console.log('you logged in your profile')
        console.log(bankUser)
    }

}

console.log(changingPassword())