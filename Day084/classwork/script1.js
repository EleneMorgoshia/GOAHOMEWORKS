// const displayy = (numbersArray) => {
//     let result = 0 
//     for(let numbers of numbersArray){
//         result += numbers
//         // console.log(numbers)

//     }

//     return  `Sum of the numebr is : ${result}`
// }

// let otherNumbersArrayy = [1,2,3,4,5,6]
// console.log(displayy(otherNumbersArrayy))
///////////////////////////////////////
// შევქმნათ ფუნქცია,რომელსაც გადაეცემა  რიცხვებით სია
//დააბრუნებს ამ სიაში ყველაზე დიდ ელემენტეს 

let array = [ 23,24,55,18,185,1,46]
const largestNumber = (numberArray) =>{
    let max = numberArray[0]
    for(let numbers of numberArray){
        if(numbers > max){
            max = numbers
        }
    }

    return `The largest number is : ${max}`
}

console.log(largestNumber(array))
/////////////////////////////////////
//შევქმნათ ფუნქცია ,რომელსაც გადაეცემა ობიექტი
//ამ ობიექტში იქნება რმადენიმე ფროფერთი( სახელი,ასაკი,ქალაქი)
//დავბეჭდოთ ობიექტს თითოეული ფროფერთის სახელს და მის მნიშვნელობას

let obj ={
    name: 'Elene',
    age : '20' ,
    lastName : 'Morgoshia'

}

const func = (obj)=> {
    for(let key in obj){
        // console.log(obj[key])
        console.log(`${key} : ${obj[key]}`)
    }
}

console.log(func(obj))
/////////////////////////////////////////////////////////
//შევქმნათ ფუნქცია ,რომესაც ადაეცემა რიცხვებით სავსე სია 
// უნდა გავარკვიოთ არის თუ არა ამ სიაში ყველა ელემეტი კენტი
//თუ ყველა ელემენტი კენტია, გამოიტანოს true , თუ ერთ ერთ ი მაინც იქნება ლუწი , გამოიტანოს false

const findOdd = (numbersArray)=> {
    let boolean = true // თავდაპირველად მივანიჭეთ ture
    for(let number of numbersArray){
        if(number % 2 == 0){ //თუ რიცხვი ლუწია ბულეან ტიპის ცვლადი მიიღებს flase -ის მნიშვნელობას
            boolean = false
        }
    }
    return boolean
}

let tempArray = [1,3,5,7,9,4,8]
console.log(findOdd(tempArray))
