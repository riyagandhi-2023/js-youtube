// JavaScript is a dynamically typed language. 
// In dynamically typed languages all type checks are performed in a runtime, only when your program is executing.

// Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let str1 = "Riya"       //String

//Number
const score = 100
const scoreValue = 100.3

const isLoggedIn = false    //Boolean
const outSideTemp = null      //null

//undefined
let userEmail;              
//let userEmail = undefined     

//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);


//BigInt
const bigNumber = 3456543576654356754n




// Refrence datatype (Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];     //Array

//object
let myObj = {
    name: "riya",
    age: 22,
}

//Function

const myFunction = function(){
    console.log("Hello world");
    
}


//how to find datatype of the variable use typeof


// console.log(typeof str1);           // string
// console.log(typeof score);          // number
// console.log(typeof scoreValue);     // number
// console.log(typeof isLoggedIn);     // boolean
// console.log(typeof outSideTemp);    // object
// console.log(typeof userEmail);      // undefined
// console.log(typeof id);             // symbol
// console.log(typeof anotherId);      // symbol
// console.log(typeof bigNumber);      // bigint
// console.log(typeof heros);          // object
// console.log(typeof myObj);          // object
// console.log(typeof myFunction);     // function



// Refrence datatype (Non primitive) datatype are (Array, objects and fuctions) object datatype. 
// Fuction only called function object datatype or only function

// link:
// https://262.ecma-international.org/5.1/#sec-11.4.3





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// Stack (Primitive) [When you use memeory it means whatever varibale you have declraed you get copy of it.]
// Heap (Non-Primitive) [When you define memory or object or anything in Heap it means you are getting original reference, 
// it means whatever you change it will change on original value.]

let myYoutubename = "riyagandhidotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"


console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "riya@google.com"

console.log(userOne.email);
console.log(userTwo.email);



