//მონაცემთა ტიპები : str, num , array , bool;
// +1 object 

let user = {
    //ობიექტი user -ის აღწერა 
    name: 'Elene' , // name - property name ; Elene - property value
    surname: 'Morgoshia',
    addres: 'Tbilisi',
    password: '123123'
}

console.log(user)
console.log(user.name) // კონსოლში დაბეჭდოს user-ში არსებული name


//////////////////////////////
// classwork: შექმენით ბანკის ანგარიშის ობიექტი,რომელსაც გადასცემთ
//ბანკის ანგარიშის მონაცემებს და შემდეგ ამ ყველაფერს ერთ გრძელ წინადადებაში დაბეჭდავთ
//მაგ: ბანკის ანგარიშის სახელია: ' ', ბანკის ექაუნთის პაროლია : ' ' 

let bankUser = {
    userName : 'Koki',
    userPassword : '123456789',
    Id:'89456123',
}

console.log('BankUsername is' + ' ' + bankUser.userName, '. His/Her Password is ' + bankUser.userPassword, ". User's ID is" + ' '+  bankUser.Id)

// ობიექტის property-ის მნიშვნელობის შეცვლა
// let userName = prompt('Enter Your Username ')

// bankUser.userName = userName
// console.log(bankUser.userName)
///////////////////////
//მეთოდი
let randomObject = {
    name:'erekle',
    lastName:'gogrichiani',
    adress: 'Tbilisi'
    // მეთოდი
}

randomObject.name
console.log()

//მეორე გზა პროფერთიზე წვდომის
console.log(randomObject['name' + '2'])
//////////////////////////////////

