const button = document.getElementsByClassName('button')
const sum = document.getElementById('sum')
const equal = document.getElementById('equal')

let numArr = []
let numStr = ''

let resultStr = ''
let result = 0

for(let i = 0 ; i < button.length ; i ++){
    button[i].addEventListener('click',function(){
        if(button[i].innerHTML == '+' || button[i].innerHTML == '-' || button[i].innerHTML == '*' || button[i].innerHTML == '/'){
            if(numArr.includes('+') ||numArr.includes('-') || numArr.includes('*') || numArr.includes('/') ){
                numStr = ''
                
                resultStr += result + button[i].innerHTML
                console.log(resultStr)

                if(button[i].innerHTML == '*'){
                    numArr[numArr.length - 1] = numStr
                    result = Number(numArr[numArr.length - 1]) * Number(numArr.length - 3) // ??
                }

            }else{
                // თუ რომელიმე ელემენტი უდრის (+;-;*;/),მხოლოდ ამ შემთხვევაში ვამატებთ სიაში  მთლიან სტრინგს 
                numArr.push(numStr) // აქ ჩაემატება რიცხვები(მაგ 45)
            }
            
           
            numArr.push(button[i].innerHTML) // აქ ემატება მათემატიკური მოქმედება ( მაგ +;-;/;*)
        
            numArr.push('') // ვამატებთ ცარიელ ადგილს(იმსითვის რომ მთლიანი სტრინგი ჩავაგდოთ მანდ )
            
            numStr = '' // ეს რატო გავაკეთეთ?
        
        }else{
            //უკვე შექმნილ სტრინგში ვამატებთ დაქლიქებულ ელემენტებს(ერთ სტრინგში გვინდა მოვაქციოთ ყველაფერი , გარდა მათმატიკური ოპერაციებისა!)
            numStr += button[i].innerHTML
            
            if(numArr.includes('+')  || numArr.includes('-') || numArr.includes('*') || numArr.includes('/')){
                numArr[numArr.length - 1 ] = numStr // ბოლო ინდექსზე მდგომი ელემენტი უდრის სტრინგს(ანუ მთლიანი ოპერაცია მათემატიკურ ოპერაციიანად!)
            
                if(numArr[numArr.length - 2] == '*'){
                    result= Number(numArr[numArr.length-1]) * Number(numArr[numArr.length - 3]) // ბოლო ელემენტის ნამრავლი ბოლოს წინის წინაზე - ეს  როცა ორი ცალი ცვლადია მარტო ??
                    resultStr += result 
                }else{
                    result= Number(numArr[numArr.length-1]) * Number(numArr[numArr.length - 3]) // ბოლო ელემენტის ნამრავლი ბოლოს წინის წინაზე - ეს  როცა ორი ცალი ცვლადია მარტო ??
                }

              

                // if(button[i].innerHTML == '+'){
                //     result= Number(numArr[numArr.length-1]) * Number(numArr[numArr.length - 3])// ?????
                // }
                // // else{
                // //     result =Number(numArr[numArr.length - 1]) + Number(numArr[numArr.length - 3]) //ამ ლაინში რა ხდება?
                // // }
                console.log('result =>' + result)
            }
        }
    })
}

equal.addEventListener('click',function(){
    // numArr.push(numStr)
    // console.log(numArr)
    // for(let i = 0 ; i < numArr.length ; i++){
    //     console.log(numArr[i])
    // }
    console.log(resultStr)
})