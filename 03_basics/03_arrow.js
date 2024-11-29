// you cannot use this in arrow function
// this is refer to current context

// lines 5 to 16 username is a property of the user object, so this.username works.

const user = {
  username: "riya",
  price: 999,

  welcomeMessage: function () {
    //console.log(`${this.username}, welcome to website`);
    //console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);                 //output: empty object {}

/*  
=> because we are in node environment and your this will referring to empty object because right now there is no context in global
-> Browser global object is window object
*/

// ===================== this in function =================

/*  
=> when you run this in function in node environment you will get many values that you can access
=> this is determined by how the function is called. 
   When called as a standalone function, it defaults to the global context (or undefined in strict mode).
*/

// function chai(){
//     // console.log(this);                   // this context (this) only work in object

//     let username = "riya"
//     console.log(this.username);             //output: undefined;  this context (this.username) cannot work in a function;

// }

// chai()

// username is a local variable inside the function, not a property of this

// const chai = function (){
//     let username = "riya"
//     //console.log(this.username);                 output: undefined

// }

// chai()

// ===================== this in Arrow function =================

const chai = () => {
  let username = "riya";
  //console.log(this.username);                 // output: undefined
  //console.log(this);                          // output: {} empty
};

chai();

// ===================== Arrow function =================

// ===> Explicit return (basic) arrow function

// ** if you wrapping in {} curly braces [=() => {}] need to write "retrun" **//
// follow below example

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

//---------------------------------------------//

// ===> Implicit return arrow function

// ** if you are not wrapping or using paratheses () [= () => ] OR  [= () => ()] no need to write "return" **//
// follow below examples

//const addTwo = (num1, num2) =>  num1 + num2
//console.log(addTwo(3,4));

// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(3,4));

const addTwo = (num1, num2) => ({ username: "riya" }); // to return object need to wrap in paratheses ({ })
//console.log(addTwo(3,4));

//---------------------------------------------//

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()
