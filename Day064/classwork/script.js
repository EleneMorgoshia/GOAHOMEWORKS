//მეთოდები
let object = {
    name:'elene',
    surname:'morgoshia',
    sayHello: function(){ // method - ობიექტში არსებული ფუნქციები
        console.log(this.name)  // this - გამოვიყენებით მივწვდით name-ის მშობელს ანუ ობიექტს
    }
}

console.log(object.sayHello())

let object1 = {
    name: 'erekle',
    surname :'birtuashvili',
    sayHelllo:function(){
        console.log(this.name) // this -ით მივწვდით name-ის მშოელს , ანუ ობიექტს. გამოიტანას erekle-ს
    }
}

console.log(object1.sayHelllo())
////////////////////////////////////
// arrays
let arr = ['1','2',3]

