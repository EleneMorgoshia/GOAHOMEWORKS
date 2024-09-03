//კლასები
//კლასები ყოველთვის იწერება დიდი ასოთი
class Person {
    //კონსტრუქტორის შექმნა 
    constructor(name , age ){
        this.name = name
        this.age = age
    }

    //მისალმების მეთოდი
    greet(){
        console.log(`My name is ${this.name} and i am  ${this.age} years old`)
    }
}

//inheritance
class Student extends Person{
    constructor(firstName, personAge, points){
        super(firstName, personAge) // superის მეშვეობით person კლასის კონსტრუქტორის უნქციონალი წამოვიდა
        this.points = points
    }

    pointsMethod(){
        super.greet() //super . -ის გამოყენებით გამოვიძახეთ თავდაპირევლი(დედა) კლასის მეთოდი
        console.log()
        console.log(`your point is: ${this.points}`)
    }
}

//inheritance
class Rectangle{
    constructor(width , height){
        this.width = width,
        this.height = height
    }

    get area(){ //get-ით იღებს მნიშვნელობას
        return this.width * this.height
    }

    set area(value){ //set-ით იცვლება მნისვნელობა
        this.width = Math.sqrt(value)  
        this.height = Math.sqrt(value) 
    }

    myDate(){
        const newDate = new Date()
        console.log(newDate)
    }
}

const newRectangle = new Rectangle(10,20)
newRectangle.myDate()
console.log(newRectangle.area)
// Rectangle.area = 16
console.log(newRectangle.width) 
console.log(newRectangle.height)

console.log('-------constructo-------------------')
const newPerson = new Person('Elene','20')
newPerson.greet()
console.log(newPerson)
console.log('-----------------------inheritance constructor---------------')
const newStudent = new Student('koki','22','99')
newStudent.greet()
console.log('-----------newMethod--------------------')
newStudent.pointsMethod()
