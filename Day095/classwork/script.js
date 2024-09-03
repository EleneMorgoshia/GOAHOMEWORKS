const form = document.querySelector("form")

const user = []
form.addEventListener("submit",function(e){
    e.preventDefault() // ამას ვწერთ, რათა არ მოხდეს გვერდის დარეფრეშება

    const password = form.elements.password.value
    const email = form.element.email.value
   
    user.push({password , email})
     console.log(user)
})




////////////////////
class Person {
    #accounts = [];
    #password; //private field
    constructor(firstname , lastname , email,password){
        this.firstname = firstname,
        this.lastname = lastname,
        this.email = email
        this.#password = password
    }

    //ვქმნით ფუნქციას - ფუნქციის სახელს დაწერ () და პარამეტრებს გადავცემთ თუ მოგვინდება 
    getFullName(){
        return `firstname${this.firstname} lastname: ${this.lastname} email:${this.email}`
    }

    //getters - ამ მეთოდის დროს ჩვენ მას არ ვუწერთ პარამეტრებს 
    get fullName(){
        return `firstname:${this.firstname} lastname: ${this.lastname} email:${this.email}`
    }

    //setter - იღებს მხოლო ერთ პარამეტრს
    set changeEmail(newEmail){
        this.email = newEmail
    }

    //static methods
    static name(){
        console.group('person class')
    }
}

const person1 = new Person('Elene','Morgoshia','elenemorgoshia.20049@gmail.com','123')
const person2 = new Person('Niko','Morgoshia','NikolozMorgoshia@gmail.com','456')
console.log(person1.changeEmail)
person1.changeEmail = 'koki@gmail.com'
console.log(person1)
console.dir(person1) //console.dir - ვბეჭდავთ ყველაფერს ობიექტის სახით
 
Person.name()
////////////////////////////////
// CLASSWORK:
//შექმმენით person კლასი,რომელსაც ექნება 4 კთვნილება (სახ,გვარი იეილი,პაროლი)
//ექნება ორი მეთოდი get მეთოდი რომელსაც მოაქვს საჯარო წყაროები
//set მეთოდბით შეგვეძლოს პაროლის შეცვლა
//აგრეთვე შექმენით რაიმე სტატიკური მეთოდი


class Individual{
    #pass;
    //რამდენი ადამიანი დარეგისტრირდა 
    static count = 0;
    static accounts = [];


    constructor(name, surname, email , pass){
        this.name = name,
        this.surname = surname
        this.email = email
        this.#pass = pass
        Individual.count++;
        console.log(`${Individual.count} people have created`)
        console.log(`${Individual.accounts}`)
    }

    //creating the get method
    get Data(){
        return `Your Name is : ${this.name} Your Surname is :${this.surname} Your email is: ${this.email} Your pass: ${this.#pass}`
    }

    //creatign the set method ( change pass)
    set passChange(newPass){
        this.#pass = newPass
    }

    //creating static method
    static zipNumber(){
        console.log('zipCode is 999')
    }

}

const individual1 = new Individual('Demetre','Morgoshia','DemetreMorgoshia@gmail.com','456789')
console.log(individual1)
individual1.passChange = '789' // changing pass
console.log(individual1)
Individual.zipNumber()

const Form = document.querySelector('submit' , (e)=>{
    e.preventDefault();
    const email = Form.email.value ;

})