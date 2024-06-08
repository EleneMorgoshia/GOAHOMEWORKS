//working on the sentences
let name = 'Mockplus'
const age = '200'

console.log(name + ' was the first ice-cream that was created in ancient China around' , age + 'BCE')
///////////////////////

// workig on the variabe types
let num = 5
let tempVar = '5'
let tempVar2 = String(10)
console.log(typeof num)
console.log(typeof tempVar)
console.log(typeof tempVar2)
console.log(typeof Number(tempVar))

//string + number = string
let num1 = 5
let num2 = '10'
let sum = num1 + num2
console.log(sum)
console.log(typeof sum)

//string + string = string
let numb1 = '10'
let numb2 = '5'
let summ = numb1 + numb2 
console.log(summ)
console.log(typeof summ)

//number + numebr = number 
let numbr1 = 10
let numbr2 = 15
let summm = numbr1 + numbr2
console.log(summm)
console.log(typeof summm)

////////////////////////
// if else
let text = 'ice-cream is the best dessert'

if(text.length < 15){ // თუ პირველი სრულდება მეორეზე აღარ გადადის 
    console.log('lenght of the text is less than 15')
}else if(text.length < 10 ){
    console.log('length of the text is less than 10')
}else{
    console.log('lenght of the text is grater than 15')
}


////////
// difference between === and ==
if('5' == 5){
    console.log('string 5 is equal to Number 5')
}else{
    console.log('they are not same')
}

if('5' === 5){
    console.log("string 5 is  strictly equaly to Number 5 ")
}else{
    console.log('string 5 is not  strictly equaly to Number 5')
}