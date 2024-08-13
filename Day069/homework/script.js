//უნდა მივწვდეთ htmlx-ის ელემენტებს
const buttons = document.getElementsByTagName('button') // იმისთის რომ თითოეულ buttons მიწვდე დივში, გჭრდება Tagname
const result = document.getElementById('result') 

//გაიდლაინი - ე.ი ვქმნით სტრინგს სადაც ვაგდებთ დაქლიქებულ რიცხვებს
// ამ სტრიგნში პირველრიგში  ვეძებთ  გამრავლების ოით მათ რაოდენობას 
//შემდეგ უნდა შევამოწმოთ ჰერ გამრავლების პერაციებს . (რაოდენობა უნდა დავითვალოთ)
//შემდეგ გაყოფის ოპერაცის ვეძებთ და ვთვლინდექს იდა შემდეგ გაყოფის ინდექსი
//შემდეგ უნდა შევადაროთ გამრავლების და გაყოფის ინდექსები (ანუ რომელიც უფრო მცირეა ( მაგ 0იდექსზე მდგომი არის გამრავლება,შესრულებდა გამრავლება )) ის შესრულდება
//უნდა გამოვიძახოთ ფუნქცია(გამრავლების ),რომელიც ამ ინდექსის წინა და შემდეგი ელემენტების ნამრავლს გამიტანს ....

let elementsStringed = ''

// //აქ რომ ვწერთ buttons.length - აქ იგუსლიმება რომ სია მაქვს,სადაც ჩაყრილია ყველა button?
for(let i = 0 ; i < buttons.length ; i ++){
    buttons[i].addEventListener('click',function(){
        // console.log(buttons[i].innerHTML)
        elementsStringed  += buttons[i].innerHTML
        
      
    })
}

function plus(num1,num2){
    return num1 + num2
}
  
function minus(num1,num2){
    return num1 - num2
}
  
function divide(num1,num2){
    return num1 / num2
}
  
function multipy( num1 , num2){
    return num1 * num2
}
  