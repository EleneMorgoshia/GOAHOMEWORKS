//timer
const resultDay = document.getElementById('day')
const resultHours = document.getElementById('hours')
const resultMinutes = document.getElementById('minutes')
const resultSeconds = document.getElementById('seconds')

const newYear = '2025-01-01'
function timer(){
    const currentDate = new Date() // our time
    const newYearDate = new Date(newYear) // newYear date

    let leftTotalSeconds = Math.floor(((newYearDate - currentDate)  / 1000)) // leftSeconds- ml/seconds (1seconds = 1000 ms/seconds)

    //left days - (1 day = 24hours; 24 hours = 24 * 60 minutes = 1440 minutes ; 1440 minutes = 1440 * 60 = 86400seconds)
    let leftDays = Math.floor((newYearDate - currentDate) / 86400)
    // leftHours - 1 day = 24 hours;  24hours = 24* 60 * 60 = 86400 ml/sec
    let leftHours = Math.floor(((newYearDate - currentDate) / 3600) % 24)
    //Left minutes - 1 minutes = 0.01667 ml/sec
    let leftMinutes = Math.floor(leftTotalSeconds / 60)
    //left seconds - 1 second - 1000 ml/sec
    let leftSecond = Math.floor((newYearDate - currentDate ) / 1000)
   
    resultDay.innerHTML = leftDays
    resultHours.innerHTML = leftHours
    resultMinutes.innerHTML = leftMinutes
    resultSeconds.innerHTML = leftSecond

}

setInterval(timer,1000)