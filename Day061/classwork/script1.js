//codewars1:
// function sum (numbers) {
//     let sum = 0
//     for(let i = 0 ; i < numbers.length ; i ++){
//       sum += numbers[i]
//     }
//     return sum
// };

//codewars2: რა მეშლება?
function validateUsr(username) {
    let char = 'abcdefghijklmnopqrstuvwxyz123456789_'
    if(username.length > 3 && username.length < 17){
        for(let i = 0 ; i < username.length ; i++){
            if(char.includes(username[i]) && username[i] != ' '){
                return true
            }else{
              return false
            }
        }
    }else{
        return false
    }
  
}

console.log(validateUsr('1234'))