const div = document.getElementsByTagName('div')

// for(let i = 0 ; i < div.length ; i ++){
//     div[i].add
// }

for(let i = 0 ; i < div.length ; i ++){
    div[i].addEventListener('click',function(){
        console.log(div[i].innerHTML)
    })
}