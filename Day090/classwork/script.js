// //ES6 object
// const obj1 = {
//     name : 'ELENE',
//     surname: 'Morgoshia'
// }

// const obj2 = {
//     adress : 'Tbilisi'
// }

// // const newObj = object.assign(target , source) -  //target - სად მოხდეს(სად განთავსდეს) , source - რომელი ობიექტი(მისამართი)

// const newObj = Object.assign( {} ,obj1, obj2) // შეიქმნა ახალი ობიექტი,სადაც შევიყვანეთ obj2  და obj1 ობიექტი
// console.log(newObj)
///////////////////////////////////////////////////////////
//შექმენით 5 ცალი ობიექტი(person1,person2....) ყველა ობიექტს გადაეცით
//ჯგუფი4-ის მოსწავლეების სახელი და გვარეი
//შემდეგ შექმენით ახალი ობიექტი,რომელსაც სახელი ერქმევაჯგუფი4-ის მოსწავლეები
//და ამ ახალ ობიექტში შეინახე მოსწავლეების შესახებ ინფო(ანუ ახალ ობიექტში შეიყვანე ძველი ობიექტები)

const person1 = {
    firstName1: 'Dachi',
    lastName1: 'sazandrishvili'
}

const person2 = {
    firstName2: 'Lika',
    lastName2: 'pruidze'
}

const person3 = {
    firstName3 : 'luka',
    lastName3: 'kechexmadze'
}

const person4 = {
    firstName4: 'Merab',
    lastName4: 'tsitsxvaia'
}

const person5 = {
    firstName5: 'ana',
    lastName5: 'giorgadze'
}

const person6 = {
    firstName6: 'rostom',
    lastName6: 'chagunava'
}

const person7 = {
    firstName7: 'Elene',
    lastName7: 'Morgoshia'
}

// creating new object
const group4Members = Object.assign({} , person1 ,person2,person3,person4,person5,person6,person7)
console.log(group4Members) // თუ ფროფერთიებს ერთიდაიგივე სახელები ერქმევა ბოლო ობიექტს რასაც დაწერს მაგისი ფროფერთის მნიშვნეობა გადაეწერება ძველი ობიექტის ფროფერთის მნიშვნელობას 


const anotherObj = Object.assign({} ,{ name:'Niko'}, {lastname:'Morgoshia'})
console.log(anotherObj) 

const otherObj = Object.assign({} , {person7})

console.log(otherObj)