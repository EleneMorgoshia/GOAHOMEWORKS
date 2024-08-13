const button = document.getElementsByClassName('button')
const sum = document.getElementById('sum')
const equal = document.getElementById('equal')

let numArr = []
let numStr = ''

let resultStr = ''
let result = 0

for(let i = 0 ; i < button.length ; i ++){
    button[i].addEventListener('click',function(){
        if(button[i].innerHTML == '+' || button[i].innerHTML == '-' || button[i].innerHTML == '*' || button[i].innerHTML == '/'){ // თუ რომელიმე ღილაკი არის მათმატიკურ იოპერატორი
            if(numArr.includes('+') ||numArr.includes('-') || numArr.includes('*') || numArr.includes('/') ){ // თუ სია მოიცავს მათემატიკუ ოპერატორს
                numStr = '' 
                
                resultStr += result + button[i].innerHTML //პირველ დატრიალებაზე : მაგ დავაქლიქეთ 5-ს ( 0 + 5 = 5 )
                console.log(resultStr)

                if(button[i].innerHTML == '*'){ //თუ უდრის გამრავლებას 
                    numArr[numArr.length - 1] = numStr // სტრინგს ვანიჭებთ ბოლო ინდექსზე მდგომი ელემენტის მნიშვნელობას 
                    result = Number(numArr[numArr.length - 1]) * Number(numArr.length - 3) // ????
                    //სიის ბოლო ინდექსზე მდგომ ელემენს(გაინტეეჯერებულს) ვამრავლებთ სიის ბოლოს წინის წინა ელემენტზე(ანუ მათემატიკური  ოპერაცის წინ მდგომზე?? )
                }

            }else{
                // თუ რომელიმე ელემენტი უდრის (+;-;*;/),მხოლოდ ამ შემთხვევაში ვამატებთ სიაში  მთლიან სტრინგს 
                numArr.push(numStr) // აქ ჩაემატება რიცხვები(მაგ 45)
            }
            
           
            numArr.push(button[i].innerHTML) // აქ ემატება მათემატიკური მოქმედება ( მაგ +;-;/;*)
        
            numArr.push('') // ვამატებთ ცარიელ ადგილს(იმსითვის რომ მთლიანი სტრინგი ჩავაგდოთ მანდ )
            
            numStr = '' // ეს რატო გავაკეთეთ?
        
        }else{ // თუ მათემატიკურ ოპერაციას არ აქლიქებს 
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

            
                console.log('result =>' + result)
            }
        }
    })
}

equal.addEventListener('click',function(){

    console.log(resultStr)
})