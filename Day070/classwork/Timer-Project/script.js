const newYear = '2025-01-01'

const resultDay = document.getElementById('day')
const resultHours = document.getElementById('hours')
const resultMinutes = document.getElementById('minutes')
const resultSec = document.getElementById('sec')


function handleNewYearTimer(){
    const currentDate = new Date() // ახლანდელი, ჩვენი დრო
    const newYearDate = new Date(newYear) // ინახება ახალი წლის დრო

    //1წამი = 1000 მილი/წამი
    let  totalSeconds = Math.floor((newYearDate - currentDate) / 1000)
    //1 დღე = 86,400 მილი/წამი (1წთ - 60წამი ; 1სთ - 60 წთ ; 1 დღე - 24სთ = 24 *60 * 60 = 86400 )
    let Day = Math.floor(totalSeconds / 86400)
    //1 საათი = 3,600 მილი/წმ
    let hours = Math.floor((totalSeconds / 3600) % 24)
    //1 წთ = 60 მილი/წმ
    let min = Math.floor((totalSeconds/60)) 
    
    let sec = Math.floor(totalSeconds % 60)

    console.log(Day,hours,min,sec ) // მილი-წამებში ითვლის დროს 

    resultDay.innerHTML = Day
    resultHours.innerHTML = hours
    resultMinutes.innerHTML = min
    resultSec.innerHTML = sec

}


setInterval(handleNewYearTimer,1000)