//მივწვდეთ html-ის ელემენტებს
const playerDice1 = document.getElementsByClassName("circle-player-1") //მარცხენა დივის წრეები
const playerDice2 = document.getElementsByClassName('circle-player-2') //მარჯვენა დივის წრეები

const reset = document.getElementById("reset-btn") // rreset button

const aboveText = document.getElementById("above-text")


reset.addEventListener('click',function(){
    let player1Number = Math.floor(Math.random() * 6 ) + 1 //1-იდან 6-ამდე რენდომ რიცხვო
    let player2Number = Math.floor(Math.random() * 6) + 1

    if(player1Number > player2Number){
        aboveText.innerHTML = 'player 1 is a winner'
    }else if(player2Number > player1Number){
        aboveText.innerHTML = 'player 2 is a winner'
    }else{
        aboveText.innerHTML = 'Draw'
    }

    console.log(player1Number + 'player1')
    console.log(player2Number + 'player2')

    switch(player1Number){
        case 1:
            
    }
})
