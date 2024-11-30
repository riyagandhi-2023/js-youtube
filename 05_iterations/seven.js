const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//====== map =====

//const newNums = myNumers.map( (num) => num + 10)
//const newNums = myNumers.map( (num) => {return num + 10})


//===== for-each =====
// const newNums = myNumers.forEach( (num) => {
//     console.log(num + 10);
//     return num + 10
// })

//===== filter =====

// const newNums = myNumers.forEach( (num) => {
//     console.log(num + 10);
//     return num + 10
// })


// ------------- chaning -------------

const newNums = myNumers
                    .map((num) => (num*10))
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
console.log(newNums);



