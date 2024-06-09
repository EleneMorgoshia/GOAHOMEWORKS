// or = ||
// and = &&
let num1 = 10
if(name == 'Gabrieli' || name == 'contne'){
    console.log(true)
}else if(num1 > 10 && num1 < 15){
    console.log(true)
}else{
    console.log('here')
}

/////////////////////////
//length
//if else
//or , and operators
//let,var,cons 
//typeof
// numebr, string
////////////////////////

//working on the loops
//while
let i = 0
while(1000  > i){
    i++ // increment - inreasing by 1 ; decrement - decreasing by 1 
    console.log(i +'. I love you ')
}

//for loop

// 3 parameters: let i = 0 - iteration variable ; i < 10 - condition ; i ++ - increment(increasing the iteration variable by 1)
for(let i = 0; i < 10 ; i ++ ){
    console.log(i)
}  

let firstName = 'PASANAURULI XINKALI'
for(let i = 0 ; i < firstName.length ; i++){
    console.log(firstName[i])
}

//inputting the desired variable  
prompt('ENTER YOU NUMBER')
let num = prompt('Enter your name')

//////////////
// CLASSWORK1
// მომხმარებელს შემოაქვს რიცხვი, თქვენ უნდა დაბეჭდოთ 
// ყველა ორის ჯერადი რიცხვბი იმ რიცხვამდე , რასაც ომხამრებელი შემოიტანს 

let number = prompt('Enter a number') // 10
for(let  i = 0; i < number; i++){  // LOOP WILL BE HELD FROM 0 TO 10
    if(i % 2 == 0){ // first loop - 0 % 2 = 0 ; second loop - 1 % 2 = 1 ; third loop - 2 % 2 = 0 ; forth loop - 3 % 2 = 1 ....
        console.log(i) // 0 ; 2....
    }
   
}
// YES!

////////////
// classwork2
// მომხმარებელს შემოაქვს რიცხვი და შემდეგ კი ვბეჭდავტ ლუწია თუ კენტი ის 
let numb = prompt('Enter a number')
for(let i = 0; i < numb ; i++){
    if(i % 2 == 0){
        console.log(i + '-even')
    }else{
        console.log(i + '-Odd')
    }
}

// another Way( without loop)
let num2 =  prompt('Enter a number')
if(num2 % 2 == 0){
    console.log(num2 + '-even')
}else{
    console.log(num2 + '-Odd')
}