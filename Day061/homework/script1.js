//დავალება2: codewarsის ის ამოცანა, რაც კლასში ვერ გავაკეთეთ
// Write a simple regex to validate a username. Allowed characters are:

//მაწყობს - პატარა ასოები+ , რიცხვები +, _+ , 4იდან 16-ის ჩათვლით+ ; არ მაწყობს - სფეისი , 
//&& - ნიშნავს რომ ორივე უნდა შესრულდეს ე.რ.თ.დ.რ.ო.უ.ლ.ა.დ
function validateUsr(username){
    let requiredValues = 'abcdefghijklmnopqrstuvwxyz1234567890_'

    if(username.length >= 4 && username.length <=16 ){
        for(let i = 0 ; i < username.length ; i ++ ){
           if(!requiredValues.includes(username[i]) || username[i] != ' ' || Number(username[i]) < 0 || Number(username[i]) >9){
                return false
           }else{
                return true
            }
        }
    }else{
        return false
    }
 
}

console.log(validateUsr('0123'))