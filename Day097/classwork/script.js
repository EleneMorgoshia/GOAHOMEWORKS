//შექმენით ადამიანების კლასი და დამატებით კაცის და ქალის კლასები
//, რომლებშიც მემკვიდრეობით წამოიღებთ ადამიაის კლასიდან ყველაფერს
//ხოლო მათში ჩაამატებთ ისე რამეს, რაც ერთმანეთისგან განასხვავებს მათ
class Human{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log('You can talk')
    }

    run(){
        console.log('you can run')
    }
}

class Woman extends Human{
    constructor(name,age){
        super(name)
        this.age = age
    }
    longHair(){
        console.log('you have long hair')
    }
}

class Man extends Human{
    constructor(name,surname){
        super(name)
        this.surname = surname
    }
    shortHair(){
        console.log('You have short hair')
    }
}

const woman1 = new Woman('Elene' , '20')
console.log(woman1)
woman1.longHair()
///////////////////////////////////////////
//შექმენით კლასი shape. დამატებით დაამატეთ კლასიები
//როგორიცაა წრე(კონსტრუქტორით დაუწერეთ რამე ფროფერთი),
//მართკუთხედი

class Shape{
    constructor(figure){
        this.figure = figure 
    }
}

class Circle extends Shape{
    constructor(figure , radius){
        super(figure); // მშობელი კლასის კონსტრუქტორს მივწვდეთ
        this.radius = radius;
    }
}

class Rectangle extends Shape{
    constructor(figure,width,height){
        super(figure);
        this.width = width;
        this.height = height;
    }

    area(){
        console.log(Number(this.width) * Number(this.height))
    }
}


const rectangle1 = new Rectangle('figure' , '20', '15')
rectangle1.area()
//////////////////////////////////
class human{
    #phone
    constructor(name,phone){
        this.name = name
        this.#phone = phone
    }

    get phoneNumber(){
        return this.#phone //იმისთის რომ privateთან წვდომა გვქონდეს  getter ში უნდა დავარითურნოთ phone - კონსტრუქტორით ვერ მივწვდებით

    }

    set phoneNumber(newNumber){
        this.#phone = newNumber
    }
}