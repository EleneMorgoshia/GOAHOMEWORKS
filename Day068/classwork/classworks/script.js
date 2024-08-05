//constructor
function person(name,surname,age){
    this.name = name
    this.surname = surname
    this.age = age

    this.changeName = function(name){ //method
        this.name = name
    }
}

const object = new person('Elene','Morgoshia','20')

console.log(object)
console.log(object.name) // elene
object.changeName('Koki')  // old name will be replaced by 'koki'
console.log(object.name)// koki

console.log(object)
/////////////////////////////////////////////////////////////////////////////
// classwork
//-ეს სახლში 
//ჩვენ უნდა გვქონდეს 3 ინფუთი,საიდანააც შემოიტანს მომხმარებელი სახელს,გვარს და ასაკს.
//და ღილაკი,რომელიც შექმნის ამ ყველაფრიდან ობიექტს . ეს ყველაფერი უნდა გამოვსახოთ
//გვერდზე ფანჯარაში(სახელი,გვარი,ასაკი) - აქვე უნდა იყოს კითხვა( გსურთ დროში მოგზაურობა?) 
// confirm- ით კიდევ ვეკითებით სურს თუ არა 
// თუ სურს, მაშინ ახალ ფეიჯზე გადავდივართ , სადაც მომხმარებელს შემოყავს , 
//თუ რანდენი ხნით უნდა მოგზაურობა და ამ ინფუთის ქვემოთ იქნება ღილაკი( საბმითი - ვიზუალურად საშიში)
// თუ დააჭერს ამღილაკს დატრიალების ანიმაცია გვინდა და იმ ფეიჯზე უნდა იყოს რომელ წლში მოხვდა
//და რამდენი წლის იქნება  ის ამ პერიოდში  


//ეს - კლასში
//შექმენით ობიექტის კონსტრუქტორი , რომელსაც გადაეცემა
//მომხმარებლის შესახებ ინფორმაცია(სახელი,გვარი,ასაკი). 
//მომხამრებელს შემოვატანინოთ რამდენი ხნით  სურს დროში მოგზაურობა ( გამოიყენეთ input html-იდან)
// ამ კონსტრუქტორში შექმენით მეთოდი,
//რომელიც მომხმარებელს ამოგზაურებს დროში, იმდენი ხნით, 
//რამდენიც მას სურს(რამდენსაც შემოიტანს ).
// მისი ასაკი უნდა  გაიზარდოს იმდენით , რამდენითაც
//მას სურს მოგზაურობა 
//მაგ: // ასაკი - 11, მოგზაურობა - 10 წლით ; უნდა დავბეჭდოთ - სახელი,გვარი - შენ იქნები 10 წლის შემდეგ 21 წლის 
/////////////////////////////////////////////////////

//we have to have the access to the html elements
const time = document.getElementById('time')

//creating the consturctor
function user(name,surname,age){
    this.name = name
    this.surname = surname
    this.age = age

    this.timeMachine = function(time){
        this.age = Number(this.age)
        time = Number(time)
        this.age += time
        console.log(this.name, this.surname,'შენ იქნები' , time ,'შემდეგ', this.age , 'წლის')
    }
}

function submit(){
    const person1 = new user('Niko','Morgoshia','17')
    console.log(person1)
    console.log(person1.timeMachine(time.value))

}
