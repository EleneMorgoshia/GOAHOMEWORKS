//Piano Keyboard
// having the acccess to the html elements
const buttons = document.getElementsByClassName("keys")


function pianoKeys(tempP){
    switch(tempP){ 
        case 'C':
            let sound1 = new Audio('/Day079/homework/sounds/C-key.mp3')
            sound1.play()
            break

        case 'D':
            let sound2 = new Audio('/Day079/homework/sounds/D-key.mp3')
            sound2.play()
            break

        case 'E':
            let sound3 = new Audio('/Day079/homework/sounds/E-key.mp3')
            sound3.play()
            break

        case 'F':
            let sound4 = new Audio('/Day079/homework/sounds/F-key.mp3')
            sound4.play()
            break

        case 'G':
            let sound5 = new Audio('/Day079/homework/sounds/G-key.mp3')
            sound5.play()
            break
        
        case 'A':
            let sound6 = new Audio('/Day079/homework/sounds/A-key.mp3')
            sound6.play()
            break
            
        case 'B':
            let sound7 = new Audio('/Day079/homework/sounds/B-key.mp3')
            sound7.play()
            break
    }
}



for(let i = 0 ; i < buttons.length ; i ++){
    buttons[i].addEventListener('click',function(){
        pianoKeys(buttons[i].firstChild.innerHTML)
    })

    document.addEventListener('keypress',function(event){
        pianoKeys(event.key)
        console.log(event.key)
    })
}