//having the access to the html elements
const result = document.getElementById('result') // result

const numbers = document.getElementsByClassName('numbers') // numbers
const operators =  document.getElementsByClassName('operators') // operatros(+;-;*;/)

const delateBtn = document.getElementById('delateBtn') // Delate button
const equal = document.getElementById("equal") // equal

let operationsArray = [] //empty array for operations
let operationsStr = '' //empty string for operations

//creating for loop to add numbers  in the empty string
for(let i = 0 ; i < numbers.length ; i ++ ){
    numbers[i].addEventListener('click',function(){
        result.innerHTML = numbers[i].innerHTML
        operationsStr += numbers[i].innerHTML // adding the number to the string
    })
}

//creating the for loop to add operators in the empty string
for(let i = 0 ; i < operators.length ; i ++){
    operators[i].addEventListener('click',function(){
        operationsArray.push(operationsStr) // adding the string in the array
        operationsStr = ''
        operationsArray.push(operators[i].innerHTML) // adding the operators in  the array
        result.innerHTML = operators[i].innerHTML
    })
}

//function for the equal button
equal.addEventListener('click',function(){
    let middleResult = 0

    //guideline for multiply and divide functions
    for(let i = 0 ; i < operationsArray.length ; i ++){
        if(operationsArray[i] == '*'){
            middleResult = parseFloat(operationsArray[i-1]) * parseFloat(operationsArray[i+1])
            operationsArray[i-1] = middleResult
            operationsArray.splice(i,2) 
            i --
        }else if(operationsArray[i] == '/'){
            middleResult = parseFloat(operationsArray[i-1]) / parseFloat(operationsArray[i + 1])
            operationsArray[i-1] = middleResult
            operationsArray.splice(i,2)
            i--
        }
    }


    middleResult = operationsArray[0]
    //guideline for plus and minus functions
    for(let i = 1 ; i < operationsArray.length ; i ++){
        if(operationsArray[i] == '+'){
            middleResult += operationsArray[i + 1]
        }else if(operationsArray[i] == '-'){
            middleResult -= operationsArray[i+1]
        }
    }

    result.innerHTML = middleResult
})