//  let myArr = ['gabrieli' , 'vano','jamala','maraha','reniza'
//     , 'grisha','romana','omara' ,'mayvala' , 'zezva','mzia'
// ] - ეს სახელები ისე უნდა გავფილტროთ , რომ ანბანის ასოების მიხედვით დალაგდეს
// დაგვჭირდება ახალი სია

let alpabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','w','x','y','z']
let myArr = ['gabrieli' , 'vano','jamala','maraha','reniza', 'grisha','romana','omara' ,'mayvala' , 'zezva','mzia']
let arranged = []
for(let char = 0 ; char < alpabet.length ; char ++){
    for(let i = 0; i < myArr.length ; i++){
        if(myArr[i][0] == alpabet[char]){
            arranged.push(myArr[i])
        }
    }
}
console.log(arranged)




// დავალება2: let arr = [5,1,10,50,80,13] -  გავაკეთოთ ახალი სია და დავალაგოთ ზრდადობის მიხედვით 
//ლიკას ვერსია
let arr = [5,1,10,50,80,13]
let resultArr = []
for(let i = 0 ; i < arr.length - 1; i ++){
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[i] < arr[j]){
            let variable = arr [i]
            arr[i] = arr[j]
            arr[j] = variable
        }
    }
}
resultArr = arr;
console.log(resultArr)
