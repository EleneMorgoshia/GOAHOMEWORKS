// task1:
// Write a function that takes the website date/time in its original string format and 
// returns the shortened format.
function shortenToDate(longDate) {
    let resultStr = ''
    let variable = ''
    for(let i = 0; i < longDate.length; i++){
        if(longDate[i] == ','){
            variable = longDate.slice(0,i)
        }
    } 
    resultStr += variable
    return resultStr
}

console.log(shortenToDate('Friday May 2, 9am'))

// better version
function shortenToDate(longDate) {
    let arrDate = longDate.split(",") // გაიხლიჩება , რომელის ერთი მხარე იქნება მძიმემდე , მეორე მხარე მძიმის შემდეგ
    console.log(String(arrDate[0])) // დაიბეჭდება მძიმემდე ნაწილი
}

shortenToDate('Friday May 2, 9am')
///////////////////////////////////////////////////////////////////////////////
//task2:
// find the average from the list
var findAverage = function (nums) {
    let sum = 0
    for(let i =0 ; i < nums.length ; i++){
      sum += nums[i]
    } 
    return sum / nums.length
}
/////////////////////////////////////////////////////////////////////////////////
//task3
//reaplcing dots with '-'
var replaceDots = function(str) {
    let myArr = str.split('.')
    let finalStr = ''
    for(let i = 0 ; i < myArr.length ; i ++){
      finalStr += myArr[i] + '-'
    } 
    return finalStr.slice(0,-1)
}
////////////////////////////////
// task4
//finding the index of particulat element from the list
function findNeedle(haystack) {
    let resultStr = 'found the needle at position '
    for(let i = 0 ; i <  haystack.length ; i ++){
      if(haystack[i] == 'needle'){
          resultStr += haystack.indexOf(haystack[i])
      }
    }
    return resultStr
  }