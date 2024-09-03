//Codewars
const digitalRoot = (n) => {
    let result = 0
    let sum = 0
    for(let element of String(n)){
        result += Number(element)
    }
    
    for(let i = String(result).length ;  String(result).length > 1 ; i++){
        for(let num of String(result)){
            sum += Number(num)
        }
        result = sum 
    }
}

console.log(50)
