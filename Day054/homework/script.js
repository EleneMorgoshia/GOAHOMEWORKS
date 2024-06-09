//დავალება1: მომხმარებელი შემოიტანს რიცხვს. თუ ის იქნება უარყოფითი
// უნდა დააბრუნოს უარყოფითი ( იგივე) რიცხვი. თუ იქნება დადებითი,
//დააბრუნოს უარყოფითი რიცხვი. ყველა შემხვევაში აბრუნებს უარყოფითს, გარდა ნულისა. 


//დავალება2: მომხარებელს შემოატანინეთ რიცხვი.შემდეგ კი დაბეჭდეთ მომხამრებლის
//შემოტანილ რიცხვამდე ყველა რიცხვის ჯამი 
  

//დავალება1:
let num = prompt('Enter a number:')
if(num < 0){
    console.log(num)
}else if(num > 0 ){
    console.log(-num)
}else{
    console.log('zero')
}

//or there is easier way
let numb = prompt('Enter a number:')
if(num <= 0){
    console.log(num)
}else{
    console.log(-1*num)
}
//დავალება2
let number = prompt('Enter a number')
let sum = 0
for(let i = 0; i <= number ; i++){ // მაგ:5 = 1+2+3+4+5 = 15
    sum += i
    // console.log('sum = ',sum) // ყოველ იტერაციაზე გაზრდილი sum
}

//ლუფის გარეთ რომ დაბეჭდავ , საბოლოო შეეგს დაინახავ
console.log('sum = ',sum)