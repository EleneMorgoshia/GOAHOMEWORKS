//es6 array methods 

//map
let arr = ['Elene','Niko','Koki','Natali']


//new arr არის ცარიელი სია, map=ის საშუალებით მივწვდებთ ძველი სიის თითუელ ელემენტს და ახალ სიაში დავამატებთ
let newArr = arr.map((item , index) => {
    //item მიითვხისებს თითოეული ელემენტეის მნიშვნელობას
    //index მიითვისებს თითოეული ელემენტის ინდექსის მნიშნელობას
    return `${index},${item}` 
})


//თითოეულ ელემენტთნ წვდომა
// arr.map((item , index) => {
//     //item მიითვხისებს თითოეული ელემენტეის მნიშვნელობას
//     //index მიითვისებს თითოეული ელემენტის ინდექსის მნიშნელობას
//     console.log(`${index},${item}`)

// })

// //anonymus function
//////////////////////////
// classwork
//შექმენით საჭმელების სია და მიწვდიტ
//თითუელს მათგანს map ის გამოყენებით და დაბეჭდეთ
//მათსავე ინდექსებით

const foodArray = ['xinkali','mwvadi','xatchapuri']

foodArray.map((element, index) =>{
    console.log(`${index} ,${element}`)
})

//classwork2
//შექმენით map ფუნქცია

//გადაუაროთ თითოეულ ელემეტს
//მივწვდეთ ელემენტებს და ინდექსებ
//და დავაბრუნოთ ახალი სია ამ ინდექსებით და 
//ელემენტებით
function map(array){
    let resultArr = []
    for(let i = 0 ; i < array.length ; i++){
        resultArr.push(`${i},${array[i]}`)
    }

    return resultArr
}

const newArray = ['chocolate ice-cream','straubery ice-cream']
map(newArr)
//////////////////////////////////
//filter method
let numberArr = [ 1,2,3,4,5,6,7,8,9,10]

let finalArr = numberArr.filter((item,index) =>{
    return item % 2 == 0 // true or false  
    //სადაც True-ს აბრუნებს მაგ ელემენტ ამატებს ახალ სიაში  
})

console.log(newArr)
//////////////////////////////////////
// classwork
//შექმენით რიცხვებით სავსე სია,შემდე კი filter-ის გამოყენებით
//ახალ სიაში ჩაყარეთ მხოლოდ 5-ის ჯერადი რიცხვბი

const elementarray = [1,5,10,20,25,8,9,4,6]

const fianllarray = elementarray.filter((item,index) =>{
    return item % 5 == 0 
})

console.log(fianllarray)
//classwork2
//filter ფუნქციის გაკეთბა filter-ის გამოყენების გარეშე(5-ის ჯერაებზე)

const anotherNewArr = []
for(let i = 0 ; i < elementarray ; i++){
    if(elementarray[i] % 5 == 0){
        anotherNewArr.push(elementarray[i])
    }
}

console.log(anotherNewArr)
//////////////////////////////////////////
let carsArr = ['bmw', 'dodge','mercdes','dodge','bugati','porshe']

let element  = arr.find((item, index) => {
    // return item.length > 3 // როდესაც პირობა სრულდება პირველად,მაგის მნიშვნელბას აბრუნებს  
    return item = 'doodge' 
})

console.log(element)
/////////////////////////////////////////////
// classwork
//შექმენით საჭმლის სახელების სია
//თვქნი მიზანი ამ სიაში მოძებნოთ 
//არის თ არა ხინკალიდ და თუ არის დაბეჭდეთ ის
//გამოპყენეთ find method

const foodsArray = ['mwvadi','xinkali(pasanauruli)','xatchapuri']

let elemenet = foodsArray.find((item, index) => {
    return item == 'xinkali(pasanauruli)'
})

console.log(element) // ეს დააბურნებს ფასანაურულ ხინკალს

let elementIndex = foodsArray.findIndex((item) => {
    return item == 'xinkali(pasanauruli)'
})

console.log(elementIndex)

//classwork
//შექმენით find ფუნქციის ანალოგი
//შექმნათ findINDEX ფუნქციის ანალოგი


for(let i = 0 ; i < foodsArray ; i++){
    if(foodsArray[i] == 'xinkali(pasanauruli)'){
        return `${foodsArray[i]}'s index : ${i}`
    }
}