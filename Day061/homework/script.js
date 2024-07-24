//დავალება1: counter-ის გაკეთება ნულიდან

//იმისთვის, რომ მივწვდეთ html-ის ელემენტებს, საჭიროა შევქმნათ რამდენიმე ცვლადი
let counter = document.getElementById('counter')
let section = document.getElementById('section')

//minus- ფუნქციია
let num = 0 
function minus(){
    num--
    counter.innerHTML = num // innerHTML-ის დახმარებით მიწვდები htmlში არსებულ h1(id='counter') ელემენტს
    givingColors()
}

//plus - ფუნქცია
function plus(){
    num++
    counter.innerHTML = num
    givingColors()
}

//zero - ფუნქცია
function zero(){
    num = 0
    counter.innerHTML = num
    givingColors()
}

//givingColors - ფუნქცია
function givingColors(){
    if(num > 0){
        counter.style.textShadow = '0px 0px 10px #B1040E'
        section.style.boxShadow = '0px 0px 25px #B1040E '
    }else if(num < 0){
        counter.style.textShadow = '0px 0px 15px green'
        section.style.boxShadow = '0px 0px 25px green'
    }else{
        counter.style.textShadow = '0px 0px 10px #1F2B6C'
        section.style.boxShadow = '0px 0px 25px #1F2B6C'
    }
}