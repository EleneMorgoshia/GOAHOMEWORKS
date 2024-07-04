//doing tasks from the codewars
//task1:
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers
function evenOrOdd(number){ // function name is 'evemOrOdd' that has 1 parameter - number
    if(number % 2 == 0){ //if theis divisible by 2
      return 'Even' //if the statement in the 5th line is true, return 'even'
    }else{
      return 'Odd' // if the statement in the 5th line is false, return 'Odd'
    }
  }


//task2:
//Convert a Number to a String!.
const stringToNumber = function(str){ //the function name i stringToNumber
    return Number(str) // string will be converted to Number 
}