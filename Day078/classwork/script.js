//audio obiect

// document.getElementById('btn').addEventListener('click',function(){
//     let sound = new Audio('/Day078/sounds/Cymbals Kick SOUND EFFECT - Crash SOUND.mp3')
//     sound.play() 
// })

///////////////////////////
// keypress

let h1 = document.getElementById('h1')
let result = ''
let concat = ''
document.addEventListener('keypress',function(event){
    if(event.key == 'Enter'){
        result = result.slice(0,-1)
        h1.innerHTML = result

    }else{
        result += event.key
        h1.innerHTML = result
    }

    if(event.key == ' '){
        concat += event.key
    }else if(event.key = 'Enter'){
        concat += event.key 
   
    }else{
        concat = ''
      
    }

    if(concat == 'Enter'){
        result += '<br>'
        h1.innerHTML = result
    }
})