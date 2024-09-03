//ternary operator - if else ის მსგავსია,თუმცა განსხვავდება სიტქასით
//სიქტაქსი ვწერთ ჯერ  პირობას შემდეგ კითხვის ნიშანს - თუ ეს პირობა ჭეშმარიტია მოხდეა ?-ის გვერდზე არსებული მოთხოვნა, თუ არადა : -ის გვერდზე მდგომი მოთხოვნა 
//მაგ:
5 > 3 ? true : false// თუ 5 არის მეტი 3 ზე მაშინ გამოიტასნ true-ს , თუ არადა false

//////////////////////////
// classwork
//შექმნით ინფუთი და ღილაკი
//მომხმარებელი ინფუთიდან შემოიტანს რიცხვს,მხოლოდ რიცხვს
//შევქმნათ arrow function , რომელშიც ჩვენ გაიგებთ მომხმარებლის შემოტანილი რიხვი
//არის თუ არა დადებითი და ასევე კენტია თუ ლუწი
//თუ დადებითია და კენტია - იქვე სადმე დაიწეროს ,რომ მომხმარელის რიცხვი არის კენტი და დადებითი
//თუ დადებითა და ლუწია - დაიწეროს რომ დადებითია და ლუწია
//თუ უარყოფითია და ლუწია -დაიწეროს რომ უარყოფითია ლუწია
//თუ უარყოფითია და კენტია - დაიწეროს რომ უარყოფითია და კენტია 

const enteredNumber = document.getElementById('EnteredNumber')// entered number
let text = document.getElementById("p")

let finalResult = ''

//ლუწ-კენტობა
const oddVsEven = (givenNumber, numeberType) => {
    givenNumber % 2 == 0 ? finalResult = `your number is ${numeberType} and even` : finalResult = `your number is ${numeberType} and odd` 
    text.innerHTML = finalResult
}
 
//დადებითობა - უარყოფითობა
const negativeVspositive = (givenNumber) => {

    let number = Number(givenNumber.value)
    number > 0 ? oddVsEven(number , 'positive') :  oddVsEven(number , 'negative')

    // if (number > 0 ){
    //     text.innerHTML = 'your number is positie'
    //     if(number % 2 == 1){
    //         text.innerHTML = 'your number is positive and odd'
    //     }else if(number % 2 == 0){
    //         text.innerHTML = 'your number is positive  and even'
    //     }
    // }else{ // თუ უარყოფითია 
    //     text.innerHTML = 'your number is negative'
    //     if(number % 2 != 0){
    //         text.innerHTML = 'your number is negative and odd'
    //     }else if (number % 2 == 0){
    //         text.innerHTML = 'your number is negative and even'
    //     }
    // }
}
