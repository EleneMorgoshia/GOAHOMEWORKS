function rps(player1,player2){
    let obj = { //ოებიქტი,რომლის ფროფერთიები არის ისინი,ვინც იგებენ - ველიუები არის ისინი,ვინც აგებენ
        scissors: 'paper', // მაკრატელი უგებს ფურცელს
        paper: 'rock', // ფურცელი უგებს ქვას
        rock: ' scissors' // ქვა უგებს მაკრატელს
    }

    //obj[player1] = obj['paper] =  rock ; 
    if(obj[player1] == player2){  //  თუ player2-ის მნიშვნელობა ემთხვევა იმას, რასაც player1 უგებს
        return 'player 1 won!' // იგებს player-1
    }else if(obj[player2] == player1 ){ // თუ player1-ის მნიშვნელობა ემთხვევა იმას,რასაც  player2 უგებს 
        return 'player 2 won' // გამარჯვებულია player2
    }else{
        return 'draw' // სხვა შემთხვევაში გვაქვს draw
    }
 
}

rps('paper','rock')