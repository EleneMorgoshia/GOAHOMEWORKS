// //გადმოგვეცემა სია,სადაც მოთავსებულია სახელები
// //ამ სიიდან უნდა ამოვარჩიოთ ყველა ის სახელი, რომელიც იწყება ა- ასოზე 

let array = ['ana','elene','nikolozi','aleqsandre','saliome','koki']
let newArr = []
const matchName = (array)=> {
    
    for(let char of array){
        if(char[0] == 'a'){
            console.log(char)
            newArr.push(char)        
        }
        console.log(newArr)
    }
}

console.log(matchName(array))
/////////////////////////////////
//foreach 
// const arr = [1,2,3,4,5,6,7]

// //foreachის მეშვეობით შეგვიძლია გადავუაროთ მთელი სიას
arr.forEach((element) => {
    console.log(element)
})

const firstName = ['Elene'] // string-ს ვერ გადაუვლის
firstName.forEach((char) =>{
    console.log(char)
})
//////////////////////////////////////
//0123581347

const stringFib = (array)=> {
    let final = '' // arrayში არსებული ითოეული ელემენტი ინახება 
    array.forEach((i) => {
        final += String(i) // final ცვლადს ვამატებთ თითოეულ ელემენტს სიიდან 
    })

    return final //ვაბრუნებთ ფინალურ ცვლადს 
}


const fibonacci = (n)=>{ // n -  რა რიცხვზე მოხდება გამოთვლა ( ანუ რამდენჯერ  დაემატოს ლისთს ახალი ელემენტი)
    let fib = [0,1] // ცვლადი , რომლის მნიშვნელობა არის სია დამ ასში ჩაყრილია 0 და 1 რიცხვები
    for(let i = 2 ; i < n + 1 ; i ++){ // i = 2 -ს იმიტომ რომ 2 ელემენტი უკვე არსებობს სიაში 
        fib.push(fib[i-1] + fib[i-2]) // პირველ ცდაზე - პირელ ინდექსზე მდგომ ელემენტს დაემატოს მენულე ინდექსზე დმგომი ელემენტი
    }
    return stringFib(fib) //გაამოვიძახეთ ზstringFib ფუნქცია და პარამეტრად გადავეცით სია fib(ამ ფნქციაში შექმნილი)
}

console.log(fibonacci(11))
//////////////////////////////////
const myFunc = (name)=> {
    console.log(`${name}`)
}

const myFunction = name => {console.log(`here: ${name}`)}

