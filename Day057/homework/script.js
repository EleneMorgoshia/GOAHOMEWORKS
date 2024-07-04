//tasks from the codewars
//task1:
// Create a combat function that takes the player's current health and the amount of damage recieved, 
// and returns the player's new health. Health can't be less than 0.
function combat(health, damage) {
    if(health > damage){
      return health - damage
    }else{
      return 0
    }
}

//task2:
// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
function solution(a, b){
    let finalResult = ''
    if(a.length < b.length){
      finalResult += a
      finalResult += b
      finalResult += a
    }else{
      finalResult += b
      finalResult += a
      finalResult += b
    } 
    return finalResult
}

//task3
// The ages will be given in whole numbers, so a baby of 5 months, 
// will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with
// [youngest age, oldest age, difference between the youngest and oldest age].
function differenceInAges(ages){
    let min = ages[0]
    let max = ages[0]
    let newArr = []
    for(let i = 0 ; i < ages.length ; i++){
      if(ages[i] < min){
        min = ages[i]
      }else if(ages[i] > max){
        max = ages[i]
      }
    }
    newArr.push(min)
    newArr.push(max)
    newArr.push(max - min)
    return newArr
}