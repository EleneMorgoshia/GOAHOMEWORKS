const obj1 = {
    name:'Elene',
    surname: 'Morgoshia'
}

const obj2 = {
    favFood : 'xinkali',
    name: 'jimshera',
    myMethod: function(){
        console.log('xeluo pasanauruli xinkali')
    }
}

const newObj2 = Object.assign(obj1 , obj2)
obj1.myMethod()
///////////////////////////////////////////////////////////
//conditional operator
//ternary operator

if( 5 > 3 ){
    console.log('true')
}else{
    console.log('false')
}

//კითხვის ნიშნის მარცხენა მხარეს წერია პირობა - მარჯვენა მხარის (ორ წერტილამდე) - თუ ეს პირობა მოხდებს - ორი წერტილის მერე (თუ ეს პირობა არასწორია )
5 > 3 ? true : false // თუ ხუტი 3 ზე მატია დაიეჭდება true თუ არადა false

console.log( 5 < 3 ? true : false  )

const systemOf = () => {
    console.log('gamoirtos sarwyavi sistema ')
}

const systemOn = () => {
    console.log('chairtos sarwyavi sistema')
}
const watering = (soilmoisture) => {
    soilmoisture > 60 ? systemOn() : systemOf()
}

watering(70)