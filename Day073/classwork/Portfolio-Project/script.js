// უნდა მივწვდეთ html-ის ელემენტებს
const leftButton = document.getElementById('left-btn')
const rightButton = document.getElementById('right-btn')

const username = document.getElementById('name')
const picture = document.getElementById('pic')
const text = document.getElementById('about-text')

// ვქმნით სიას თითეოული ადამინის მონაცემის შესანახად
let profileArray = []

//ვქმნით ობიექტის კონსტრუქტორს 
function profileObject(pic , name , about){
    this.pic = pic
    this.name = name
    this.about = about
}

const person1 = new profileObject(
    '/Day073/classwork/classwork-Project/images/person-1.jpg',
    'jae',
    'Aiden Thompson is a 29-year-old graphic designer from Portland, OR. With a passion for hiking, digital art, and cooking Italian cuisine, Aiden combines his creative talents with his love for the outdoors. He enjoys exploring the Pacific Northwest and often shares his adventures through his art. Aiden’s most recent project was designing a mural for a local coffee shop that has become a popular photo spot for visitors.'
)

const person2 = new profileObject(
    '/Day073/classwork/classwork-Project/images/person-2.webp',
    'Maria Garcia',
    'Maria Garcia, a 34-year-old elementary school teacher from San Antonio, TX, is dedicated to fostering a love for learning in her students. Her interests include reading historical fiction, gardening, and salsa dancing. '
)

const person3 = new profileArray(
    '/Day073/classwork/classwork-Project/images/person-4.jpg',
    'Jamal Robinson',
    'Jamal Robinson, a 26-year-old software developer from Atlanta, GA, is known for his skills in coding and his strategic prowess in chess. When he is  not working on innovative software solutions, Jamal enjoys cycling around the city and contributing to open-source projects. '
)

//ვამატებთ სიაში ელემენტებს
profileArray.push(person1)
profileArray.push(person2)
profileArray.push(person3)

let counter = 0 
//ფუნქცია მარცხენა ღილაკისთვის
leftButton.addEventListener('click',function(){
    counter -- //როცა დააქლიქებს იუზერი მარცხენა ღლაკს ერით დაიკლებს სულ ეს ცვლადი
    if(counter < 0){
        counter = profileArray.length - 1
    }
    username.innerHTML = profileArray[counter].name
    text.innerHTML.profileArray[counter].text    
    picture.src = profileArray[counter].picture
})


rightButton.addEventListener('click',function(){
    counter ++
    if(counter > profileArray.length - 1){
        counter == 0
    }
    username.innerHTM = profileArray[counter].name
    text.innerHTML.profileArray[counter].text
    picture.src = profileArray[counter].picture
}) 