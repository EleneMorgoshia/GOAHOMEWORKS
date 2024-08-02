//working on codewars

//task1:
function cockroachSpeed(s) { 
    //1km/h = 100000cm/3600s
    result = String(s * 100000 / 3600) // 1.09 = 30.277777778
    splitedString = result.split('.') 
    return Number(splitedString[0])
}

cockroachSpeed(1.09)
////////////////////////////////////////////////
//მთელ რიცხვად გადაქცევის გაიდლაინი
let num = 2.555
console.log(Math.floor(num))
console.log(Math.round(num)) // დაამრგვალებს(კლასიკურად , როგორც მათემატიკაში)
console.log(Math.pow(num,2)) // pow - ხარისხში აყვანა - ორი პარამეტრი num - რაც ადის ხარისხში, 2 - მერამდენე ხარისხშიც უნდა ავიდეს
console.log(Math.sqrt(num)) // sqrt - ფესვი ამოღება რიცხვიდან

//random
console.log(Math.random()) // მას გამოაქვს 0-იდან 1 ამდე რაღაც რენდომული რიცხვი
console.log(Math.random() * 20 ) // 20 ამდე აირჩვეს რენდომად
console.log(Math.floor(Math.random())) // მთელ რიცხვს გამოიტანს რენდომულად 

let randomNumber = Math.random() * 50
let numbers = Math.floor(randomNumber)
console.log(randomNumber)
console.log(numbers)

//////////////////////////////////
