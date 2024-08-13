const btn = document.getElementsByTagName('button')
const equal = document.getElementById('equal')
const finalResult = document.getElementById('result')

let result = ''

for(let i = 0 ; i < btn.length ; i++){
    btn[i].addEventListener('click',function(){
        result += btn[i].innerHTML
        finalResult.innerHTML = result
    })
}
//როცა ტოლობას დავაწვებით 
equal.addEventListener('click',function(){
    result = eval(result)
    finalResult.innerHTML = result
})

//eval() - გადაეცემა სტრინგი, რომელიც უნდა შეიაცავდეს მათემატკურ ოპერაციას(+;-;/;*)
//eval
// console.log('5+5') // გამოიტანს 5+5
// console.log(eval('5+5')) //eval სტრინგს გარდაქმნის მათემატიკურ ოპერაციად , შეასრულებს მას და გამოიტანს შედეგს ანუ 10-ს

 