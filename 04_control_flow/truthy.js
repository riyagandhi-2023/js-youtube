// truthy values OR falsy values

//-----------> truthy values
// "0", 'false', " ",' ', [], {}, function(){}                  //space between string " ", ' ' // function(){} called empty function
// except falsy value everything assumed as truthy values

//-----------> false values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//================ truthy values =====================

// except falsy value everything assumed as truthy value
// "0", 'false', " ", [], {}, function(){}

// const userEmail = "r@riya.ai"
// if (userEmail){
//     console.log("Got user email");               //output: Got user email ("assumed string has a true value")
// } else{
//     console.log("Don't have user email");
// }

// -----------------------------------------

// const userEmail = []
// if (userEmail){
//     console.log("Got user email");                      //output: Got user email ("assumed empty array as a true value")
// } else{
//     console.log("Don't have user email");
// }

//================ falsy values =====================

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// const userEmail = ""
// if (userEmail){
//     console.log("Got user email");
// } else{
//     console.log("Don't have user email");           //output: Don't have user email ("empty string without space assumed as a false value")
// }

// -----------------------------------------

// const userEmail = []
// if (userEmail.length === 0){
//     console.log("Array is empty");

// }

// -----------------------------------------

// const emptObj = {};

// if (Object.keys(emptObj).length === 0) {
//   console.log("Object is empty");
// }

// false == 0 output: true // false == '' output:: true // 0 == "" output:: true
//=====================================================

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10                   // output: 5
// val1 = null ?? 10                // output: 10
// val1 = undefined ?? 15           // output: 15
val1 = null ?? 10 ?? 15             // output: 10


// first value that it gets it is the output

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

