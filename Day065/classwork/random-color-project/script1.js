//working on the project - collor flipper

//we have to access the html elements 
const hexCodeSpan = document.getElementById('hex-code')
const main = document.getElementsByTagName('main')

//creating function that will  generate the symbol of collors' code
function randomColor(){
    //we have to write all the random version that will be displayed on the screen
    let hexList = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let hexCode = '#'
    for(let i = 0 ; i < 6; i++){
        //Math.random() - just the random nuber (we do not have a range in here) , Math.random() * 5 - random numer from 0 to 5 ( we have a range in here)
        let index = Math.floor(Math.random() * hexList.length) //random integer from 0 to  the number that equals to the length of  hexList  
        hexCode += hexList[index]
    }

    hexCodeSpan.innerHTML = hexCode //Span will be covered by the random color name
    hexCodeSpan.style.color = hexCode // Span color will be the random 
    main[0].style.backgroundColor = hexCode // background of the main part will be changed randomly
}


//new function - automaticly change function
setInterval(randomColor,2000) // rancomColor - function(parameter) 2000- time of changing (parameter)

