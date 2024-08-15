let div = document.getElementById('div')

let vertical = 0 
let horizontal = 0 
let Left = 0
let Right = 0

document.addEventListener('keypress',function(event){
    console.log(event)
    switch(event.key){ // switchს გადავეცით კლავიატურის ღილაკი 
        case 'w': // თუ ეს ღილაკი იქნება w
            vertical += 20 //ცვლადი რომელიც იზრდება 20-ით
            div.style.top = vertical + 'px' // ქვემოდან ზემოთ აიწევს დივი ვერტიკალური ცვლადის მნიშვნელობის შესაბამისობით
            div.style.boxShadow = '0px 50px 20px yellow'
            console.log(vertical + 'px')
            break
        case 's': //თუ ეს ღილაკი იქნება s
            vertical -= 20  // ცვლადი რომელიც მცირდება 20-ით
            div.style.top = vertical + 'px' // ვერტიკალური მიმართულებით,ზწმოდან ქვემოთ ჩამოიწევს ცვლადი ვერტიკალის მნიშვნელობის შესაბამისობით
            div.style.boxShadow = '0px -50px 20px yellow'
            console.log(vertical + 'px')
            break
        
        case 'a': // როცა კლავიზტურაზე დავაჭერთ a-ს
            horizontal -= 20 // ცვლადი სახელად ჰორიზონტალი გაიზრდება 20- ოთ 
            div.style.left = horizontal + 'px' // მარცხნიდან მარჯვნივ წამოვა ჰორიზონტალური ცვლადის მნიშვნელობის შესაბამისად
            div.style.boxShadow = '50px 00px 20px yellow'
            console.log(horizontal + 'px')
            break
        case 'd': //თუ ეს ღილაკი იქნება d
            horizontal += 20
            div.style.left = horizontal + 'px'
            div.style.boxShadow = '-50px 0px 20px yellow'
            console.log(horizontal + 'px')
            break
    }

})