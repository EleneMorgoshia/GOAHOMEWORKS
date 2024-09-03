class Animals{
    constuctor(name){
        this.name = name
    }

    walk(){
        console.log('the animal is able to move')
    }


}

class Dog extends Animals{
    constuctor(dogName){
        this.dogName = dogName
    }

    bark(){
        console.log('the dog is able to bark')
    }
}

const dog1 = new Dog('basara')
dog1.bark()
dog1.walk()

const animal1 = new Animals("horse")
animal1.walk()


class Luka{
    constuctor(parameters){
        this.paramteres = parameters
    }
}