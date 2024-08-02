//working on codewars
//task1:(easy)
function removeExclamationMarks(s) {
    let result_str = ''
    for(let i = 0 ; i < s.length ; i ++){
      if(s[i] != '!'){
        result_str += s[i]
      }
    }
    return result_str
}

//tansk2:
function XO(str) {
    let countX = 0
    let countO = 0

    for(let i = 0 ; i < str.length ; i ++){
      if(str[i] == 'x' || str[i] =='X'){
        countX += 1
      }else if(str[i] == 'o' || str[i] == 'O'){
        countO += 1
       }
    }

    if(countX == countO){
      return true
    }else{
      return false
    }
}