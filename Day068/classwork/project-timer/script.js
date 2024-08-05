//DATE object 

const timeLabel = document.getElementById('time')

function time(){

    const date = new Date(); //აქ ინახება სულ ახლ-ახალი დრო

    let hours = date.getHours() // ვინახავთ ამჟამინდელ საათს
    let minutes = date.getMinutes() // ვინახავთ ამჟამინდელ წუთს
    let seconds = date.getSeconds() // ვინახავთ წამებს


    let currentTime =  hours + ':' + minutes + ':' + seconds

    timeLabel.innerHTML = currentTime
}




setInterval(time,1000) // 1წამი = 1000 მილი/წამი
//getHours()
//getMinutes()
//getSeconds()