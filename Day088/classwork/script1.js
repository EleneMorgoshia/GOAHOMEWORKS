// arrow funcions

// default მნიშვნელობა  - თუ მომხმარებელი არ გადსცემს არგუმენტს, მაშინ name-ის მნიშვნელობა იქნება user
const myFunc = (name = 'user')=> {
    console.log(`hello ${name}`)
}

// myFunc('Elene')

//default მნიშვნელობა num2 -ის არის 1
const multiply = (num1 = 1, num2 = 1) => {
    console.log(num1 * num2)
}

multiply(10,2) // შედეგი იქნება 10 * 2 = 20
multiply(2) // resul = 2 * 1 = 2

multiply() 
//////////////////////////////////////////
//classwork:  შექმენით გამრავლების,გაყოფის,მიმატების და გამოკლების ფუნქციები
//გადაეცით მას საწყისი(default პარამეტრები) . შემდეგ შექმენით ახალი ფუნქცია (კალკულატორი) რომელსაც 
//გადაეცემა ორი რიცხვი , ეს 4 ფუნქცია(მათ ადგილას რა უდნა ჩავწერო გამძახების დროს?) და  ერთი მოქმედების პარამეტრი (პლუსი,მინუსი,გამრავლება,გაყოფა)
//მოქმედების პარამეტრის მიხედვით გამოიძახეთ შესაბამისი ფუნქცია და ჩაატარეთ მათმატიკური ოპერაცია მა ფუნქციის პარამეტრის მიხედვით


//გამრავლების ფუნქცია
const multiplication = (num1 = 1 , num2 = 1) => {
    return num1 * num2
}

//გაყოფის ფუნქცია
const division = (num1 = 1 , num2 = 1 ) => {
    return num1 / num2
}

//მიმატების ფუნქცია
const plus = (num1 = 1 , num2 = 1) => {
    return num1 + num2
}

//გამოკლების ფუნქცია
const minus = (num1 = 1 , num2 =1 ) => {
    return num1 - num2
}

//კალკულატორის ფუნქცია 
//პარამეტრებში ფუნქციის პარამტერრების მნიშვნელობებს არ სჭირდება ფრჩხილები(ისედაც მიწვდება)  multiplicationVar = multiplication
const calculator = (number1, number2, operator , multiplicationVar = multiplication() , divisionVar = division() , plusVar = plus() , minusVar = minus()) => {
    if(operator == '+'){
        return plus(number1 , number2 )
    }else if(operator == '-'){
        return minus(number1 , number2)
    }else if(operator == '*'){
        return multiplication(number1 , number2)
    }else if(operator == '/'){
        return division(number1 , number2)
    }else{
        console.log('pls enter operator from: + , - , * , /')
    }
}
//რა მეშლებააა???????? - ფუნქციას პარამეტრების თანმიმდევრობა!
// როცა პირველი წერია ფუნქცია და შენ შეგყავს number1-ის მნიშვნელობა , მას კოდი აღიქვამს როგორც ფუნქციის არგუმენტს(მნიშვნელობას)  

console.log(calculator(10,5,'/'))


