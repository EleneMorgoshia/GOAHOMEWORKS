let cls = document.getElementsByClassName('div')

for(let i = 0 ; i < cls.length ; i ++){
    cls[i].addEventListener('click',function(){
        let h2 = cls[i].firstChild.nextSibling.innerHTML;
        switch(h2){
            case 'w':
                let sound = new Audio('/Day079/classwork/Drum-Sound-project/sounds/1 Beat Hi Hat Sound Effect.mp3')
                sound.play()
                console.log(sound)
                break

            case 'a':
                let sound1 = new Audio('/Day079/classwork/Drum-Sound-project/sounds/1 Beat Hi Hat Sound Effect.mp3')
                sound1.play()
                break

            case 's':
                let sound2 = new Audio('/Day079/classwork/Drum-Sound-project/sounds/1 Beat Hi Hat Sound Effect.mp3')
                sound2.play()
                break 
                
            case 'd':
                let sound3 = new Audio('/Day079/classwork/Drum-Sound-project/sounds/1 Beat Hi Hat Sound Effect.mp3')
                sound3.play()
                break 

            case 'j':
                let sound4 = new Audio('/Day079/classwork/Drum-Sound-project/sounds/1 Beat Hi Hat Sound Effect.mp3')
                sound4.play()
                break
            
            case 'k':
                let sound5 = new Audio('/Day079/classwork/Drum-Sound-project/sounds/1 Beat Hi Hat Sound Effect.mp3')
                sound5.play()
                break
            
            case 'l':
                let sound6 = new Audio('/Day079/classwork/Drum-Sound-project/sounds/1 Beat Hi Hat Sound Effect.mp3')
                sound6.play()
                break
        }
    })
}
