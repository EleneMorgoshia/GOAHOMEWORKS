// if else

let name = String(prompt('ENTER YOUR Name'))

// if(score == 10){
//     console.log('ყოჩაღ , ძალიან მაგარი ხარ')
// }else if(score == 8){
//     console.log('გაუმჯობესება შეიძლება')
// }else if(score == 5 ){
//     console.log('ცუდი შედეგია')
// }

// switch
switch(name){ // პარამეტრად გადასცემ იმას, რაზეც უნდა მოხდეს ე.წ მოქმედებები 
    // case 10:
    //     console.log('ძალიან კარგია')   
    //     break                //case- პირობა , მის შემდეგ იწერება მისი ერთ-ერთი მნიშვნელობა
    case 'gabrieli':
        console.log('Mentor')
        break
    case 'nika':
        console.log('Head-Mentor')
        break
    case 'vano':
        console.log('razmis lideri')
        break
    case  'luka':
        console.log('Student')
        break

    default: // ასრულებს else -ის ფუნქციას. თუ ზემოთ პირობები არ სრულდება ,შესრულება ეს
        console.log('არ არის გოაელი')
        break
}


//task from the codewars
function removeEveryOther(arr){ // function name is removeEveryOther and it has 1 parameter - arr
    let newArr = [] // created an empty list called - newArr
    for(let i = 0; i < arr.length ; i++){ //for loop in newArr
        if(i % 2 == 0){ // if the iteration variable is Even (the index of the list's member)
            newArr.push(arr[i]) // the variable at index i will be added in the newArr
        }
    }
    console.log(newArr) // function returns the newArr
}

let arr = ['elene','ioane','nikolozi','Maia','erekle']
removeEveryOther(arr)

//////////////////////////////
//array ; sort method
let myList = ['luka','nino','daviti','temuri','giorgi','rostomi','lika']
console.log(myList[1])
console.log(myList.indexOf('giorgi')) // დააბურნებს გიორგის ინდექსს , ანუ 4-ს
console.log(myList.sort()) // sort - დაალაგებს ასოების ზრდადობით

let numbersList = [5,1,50,73,26,121,1325,26,74]
console.log(numbersList.sort()) // რიცხვბე დაასორტირებს პირველ ირცხვებს მოცემული რიცხვებისა
////////////////////////////
// reverse method
let myArr = ['luka','nino','daviti','temuri','giorgi','rostomi','lika']
let sortedArr = myArr.sort()
let reverseArr = sortedArr.reverse() // reverse - შემობრუნებულ სიას დაბეჭდავს 
console.log(reverseArr)

//////////////////////
// silce
let anotherArr = ['luka','nino','daviti','temuri','giorgi','rostomi','lika']
console.log(anotherArr.slice(0 , 4)) // მე0 ინდექსიდან მეოთხე ინდექსა-მდე! დაბეჭდავს
////////////////////////
// splice
let otherArr = ['luka','nino','daviti','temuri','giorgi','rostomi','lika']
console.log(anotherArr.splice(3,1)) // splice - კონკრეტული ელემენტიდან სასურველი რაოდენობის მონაცემს შლის -  ანუ მესამედან დაიწყებს და ამოიღებს 1 ელემენტს
/////////////////////////
//-----------array methods ----------------//
//push
//sort
//reverse
//indexof
//slice
//remove
//splice
