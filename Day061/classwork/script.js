//ვქმნით ცვლადებს , რომლის მეშვეობითაც მივწვდებით ელემენტებს
const result = document.getElementById('result')
const section = document.getElementById('section')



let num = 0
function plus(){
    num++
    result.innerHTML = num
    chooseColor()
 }

function minus(){
    num--
    result.innerHTML = num
    chooseColor()
}

function reset(){
    num = 0
    result.innerHTML = num
    chooseColor()
}


//რიცხვისთვის ფერის მიცემის ფუნქცია
function chooseColor(){
    if(num > 0){
        result.style.textShadow = '0px 0px 10px red'
        section.style.boxShadow = '0px 0px 10px red'
    }else if(num < 0){
        result.style.textShadow = '0px 0px 10px green'
        section.style.boxShadow = '0px 0px 10px green'
    }else{
        result.style.textShadow = '0px 0px 10px #020347'
        section.style.boxShadow = '0px 0px 10px #020347'
    }
}