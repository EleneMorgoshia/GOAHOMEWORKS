// *********scope******************//
//let - block scope
//var - (var-ით შექმნილ ცვლადს ვერ მიწვდები ფუნქციის გარეთ)
//const - block scope
////////////////////////////////////
//global scope

let surname = 'Morgoshia' // მასზე წვდომა გვაქს ფუნქციის შიგნით,ფუნქციის გარეთ(ბლოკის შიგნით,ბლოკის გარეთ)

function myFunc(){
    console.log(surname)
}

myFunc()