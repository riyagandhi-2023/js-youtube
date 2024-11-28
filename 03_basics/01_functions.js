function sayMyName() {
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

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  //console.log("Riya");
  return result;
  //console.log("Riya");            //after retrun code is unreachable code
}

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

//2) way to return

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 9);
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

function loginUserMessage(username = "sam") {
  // if(!username){
  //     console.log("Please enter a username");
  //     return
  // }
  return `${username} just logged in`;
}
//console.log(loginUserMessage())                 //output: sam just logged in
//console.log(loginUserMessage("riya"))

// false value = empty string, undefined

//-------------------------------function part 2-----------------------------------------

function calculateCartPrice(...num1) {
  //... are called spread or rest operator: it depands on use case; here is rest operator case
  return num1;
}

//console.log(calculateCartPrice(200, 400, 500, 2000))          //output: [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, ...num1) {
  // val is taking 200, val2 is taking 400 rest will show in num1 array
  return num1;
}
//console.log(calculateCartPrice(200, 400, 500, 2000))            //output: [ 500, 2000 ]

// pass and use object into function

const user = {
  //object
  username: "riya",
  price: 199, // if it is prices it will be undefined
};

function handleObject(anyobject) {
  //function
  //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  //return anyobject                            //line (1)
}
//handleObject(user)

//console.log(handleObject(user));               //line (2) (combination of line (1) and line (2) will give output: { username: 'riya', price: 199 }

// can pass direct object
// handleObject({
//     username: "sam",
//     price: 399
// })

// pass and use Array into function

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));                     // can direct pass array
