//კლასში გაკეთებული ბოლო დავალება-ის გაუმჯობესება 
//დავალება:
//მომხმარებელს შემოატანინეთ ბანკის მონაცემები.+ ამ მონაცემებით შექმენით ობიექტი,+
//უნდა კითხოთ სურს თუ არა პაროლის შეცვლა, 
//თუ პასუხი იქნება კი , შეეკითხოთ ახალი პაროლი და შეცვალოთ
//ასევე ეს პაროლი უნდა შეიცვალოს ობიექტშიც .
//საბოლოოდ უნდა დაიბეჭდოს ეს ყველა მონაცემი ერთად 
//( გამოიყენეთ [] და . -იც ) . 
//გაუმჯობესება - HTML ფაილში უნდა იყოს გამოტანილი შედეგი 
///////////////////////////////////////////////////////////////////

//იმისთვის, რომ ვიმოქმედოთ html-ის ელემენტებზე, უნდა მივწვეთ მათ

//იუზერის მიერ შემოყვანილ მონაცემებზე წვდომა
const userName = document.getElementById('userName')
const userPassword = document.getElementById('userPassword')
const userId = document.getElementById('userId')

//პარაგრაფში არსებული სპანები
const resultName = document.getElementById('resultName')
const resultPassword = document.getElementById('resultPassword')
const resultId = document.getElementById('resultId')

//ვქმნით ობიექს, სადაც ფროფერთიებს ვანიჭებთ იუზერის მიერ შემოტანილი მონაცემის მნიშვნელბას
let bankUser = {
    bankName: userName,
    bankPass: userPassword,
    bankId :userId
}

//ვქმნით ფუნქციას, რომელიც პარაგრაფში არსებულ სპანებს მიანიჭებს იუზერის მიერ შემოტანილი მონაცემების მნიშნელობას
function data(){
    resultName.innerHTML = bankUser.bankName.value,
    resultPassword.innerHTML = bankUser.bankPass.value,
    resultId.innerHTML = bankUser.bankId.value
}