
function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
}

// sayMyName();         //basics way to excute

// function addTwoNumbers(number1, number2){               // making functions defination is called parameters 
//     console.log(number1 + number2);
    
// }

// const result = addTwoNumbers(3, 5)                     // value use or pass for calling function is called arguments
// console.log("Result: ", result);

// console is for printing value;; return use for returning value

//1) way to return

function addTwoNumbers(number1, number2){ 
     
    let result = number1 + number2
    //console.log("Riya");
    return result 
    //console.log("Riya");            //after retrun code is unreachable code
    
}

// const result = addTwoNumbers(3, 5)                     
// console.log("Result: ", result);


//2) way to return

function addTwoNumbers(number1, number2){  
    return number1 + number2 
}

const result = addTwoNumbers(3, 9)
//console.log("Result: ", result);


// function loginUserMessage(username){                 // or define username = "abc" (give default value)
//     if(username === undefined){                      // if(!username)
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("riya"))
// console.log(loginUserMessage())                 // undefined just logged in


// another way of writing if: 
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())


// another way of not getting undefined answer: give default value

function loginUserMessage(username = "sam"){
    // if(!username){
    //     console.log("Please enter a username");
    //     return
    // }
    return `${username} just logged in`
}
//console.log(loginUserMessage())                 //output: sam just logged in
console.log(loginUserMessage("riya"))

// false value = empty string, undefined








