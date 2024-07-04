//functions
function multiply(num1,num2){
    console.log(num1 * num2)
}

// multiply(20,10)
// number1 = 25
// number2 = 5
// multiply(number1,number2)


// classwork
// შექმენით გუნქცია ,რომელსაც გადასცემთ მომხმარებლის შემოტანილ 2 რიცხვს და 
// გადაამრავლებთ ერთმანეთზე

function  multiplication(firstNumber,secondNumber){
    console.log(firstNumber * secondNumber)
}

let numbr1 = prompt('Enter your first num')
let numbr2 = prompt('Enter you  second number')
multiplication(numbr1,numbr2)


// classwork2
// მომხმაარებელს ეკითხებით 2 რიცხვს, ასევე ეკითხებით მათეატიკუ მოქმედება(+,-,/,*)
// შექმენით ფუნქცია ,  რომელიც შეასრულეებს მათემატიკურ ოპერაციუს 
// მომხმარებლის იტერესეიდან გამომდინარე. 

let askingNumber1 = Number(prompt('Enter the number1:'))
let askingNumber2 = Number(prompt('Enter the number2:'))
let askingOperation = String(prompt("Enter the operation(+,-,/,*): "))

// function calculator(askedNumber1 , askedNumber2 , askedOperation){
//     if(askedOperation == '+'){
//         console.log(askedNumber1 + askedNumber2)
//     }else if(askedOperation == '-'){
//         console.log(askedNumber1 - askedNumber2)
//     }else if(askedOperation == '*'){
//         console.log(askedNumber1 * askedNumber2)
//     }else{
//         console.log(askedNumber1 / askedNumber2)
//     }
// }

// calculator(askingNumber1,askingNumber2,askingOperation )

// მენტორის ვერსია
let num1 = Number(prompt('num1'))
let num2 = Number(prompt('num2'))
let operator = String(prompt('operator'))

function calculatorr(number1 , number2 , operator){
    if(operator == '+'){
        return number1 + number2
    }else if(operator == '-'){
        return number1 - number2
    }else if(operator =='*'){
        return number1 * number2
    }else if(operator == '/'){
        return number1 / number2
    }else{
        return "fail"
    }
}

console.log(calculatorr(num1,num2,operator))

//arrays
let myArr = ['gabrieli' , 'vano','jamala','maraha','reniza'
    , 'grisha','romana','omara' ,'mayvala' , 'zezva','mzia'
]
console.log(myArr[7])

for(let i = 0 ; i < myArr.length; i++){
    console.log(myArr[i])
}

finalArr = [];
finalArr.push('gabrieli')
