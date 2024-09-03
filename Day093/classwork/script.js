let myList = [1,2,3,4,5]

//სიის დესტრუქცია - მასივის დაშლა
const [num1 , num2, num3 , num4 , num5] = myList // შეიმქნება ცვლადები num1,num2,num3,num4,num5 და მათი მნიშვნელობები შეაბამისად იქნება num1 = 1 ; num2 = 2 ; num3 = 3 ; num4 = 4 ;num5 = 5
console.log(num1) 
///////////////////////
// classwork
//შექმენიტ სია,რომელიც მოთავსეული 
//იქნება რამდენიმე ობიექტი, თთეული ობიექტის
//ფროფერთიები იქნება ერთ და იგივე ( სახელი,მისამართი)
//ჩვენი მისია, რომ მოვახდინოთ მა სიის დესტრქუცია/დაშლა
//ისე რომ თითუელ სახელზე და მისამართზე გვქონდეს ცვლადის სახელით 
//წვდომა

const personArray = [
    {
        name:'Elene',
        address: 'Tbilisi'
    } , 
    {
        name:'Niko',
        address: 'Tbilisi'
    } ,
    {
        name:'Ioane',
        address: 'Tbilisi'
    } ,
    {
        name:'Koki',
        address: 'Tbilisi'
    }

]

//listის დესტრუქხია - obj1 = პირველ ობიექტს ,obj2 =  მეორე ობიექტს , obj3 = მესამე ობიექტს
const [obj1, obj2 , obj3, obj4] = personArray 
console.log(obj1)


//ფროფერთიებს ცვლადებს  ვანიჭბეთ ახალ მნიშვნელობებს  , იმისთვის რომ არ დააეროროს ერთიდაიგივე სახელის გამო
const {name:person1Name, address:person1Surname} = obj1
const{name:person2Name,address:person2Surname} = obj2
const {name:person3Name, address:person3Surname} = obj3
const{name:person4Name,address:person4Surname} = obj4

console.log(person1Name)