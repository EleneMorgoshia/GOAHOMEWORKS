
const result = document.getElementById('result')

function timer(){
    const currentDate = new Date()

    let hours = currentDate.getHours()
    let minutes = currentDate.getSeconds()
    let seconds = currentDate.getMinutes()

    let timeResult = hours + ":" + minutes + ":" + seconds
    result.innerHTML = timeResult
}

setInterval(timer,1000)