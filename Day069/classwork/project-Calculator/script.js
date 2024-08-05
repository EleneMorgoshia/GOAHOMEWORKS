//მივწვდეთ ღილაკებს 
const buttons = document.getElementById('buttons')
const p = document.getElementById('p')

let num = ''
for(let i = 0 ; i < buttons.length ; i ++){
    buttons[i].addEventListener('click',function(){
        num += buttons[i].innerHTML // თითეული ელემენტი ჩაიყარა ერთ სტრინგში
        p.innerHTML = num
        console.log(num)
    })
}

//სია უნდა გაისპლიტოს, თუ არის მიმატება (მიმატების ფუნქცია გვჭირდება )...

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

//გაიდლაინი - ე.ი ვქმნით სტრინგს სადაც ვაგდებთ დაქლიქებულ რიცხვებს
// ამ სტრიგნში პირველრიგში  ვეძებთ  გამრავლების ოპერაციებს . (რაოდენობა უნდა დავითვალოთ)
//შემდეგ გაყოფის ოპერაცის ვეძებთ და ვთვლით მათ რაოდენობას 
//შემდეგ უნდა შევამოწმოთ ჰერ გამრავლების ინდექს იდა შემდეგ გაყოფის ინდექსი
//შემდეგ უნდა შევადაროთ გამრავლების და გაყოფის ინდექსები (ანუ რომელიც უფრო მცირეა ( მაგ 0იდექსზე მდგომი არის გამრავლება,შესრულებდა გამრავლება )) ის შესრულდება
//უნდა გამოვიძახოთ ფუნქცია(გამრავლების ),რომელიც ამ ინდექსის წინა და შემდეგი ელემენტების ნამრავლს გამიტანს ....