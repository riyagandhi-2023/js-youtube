// ----------------- if ---------------//

/*
if (condition){
}

if (true){
    // will go into condition
    // will run (excute) internal code
}

if (false){
    // won't go into condition
    // won't execute the code in the block scope between line 12 to 14
}

*/

const temperature = 41;
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// ---------------------------------------
/*
// implicit scope: imagined there is a scope; only execute in one line also;
// can have multiple lines for that you can use , (coma). at the end use ; (semi-colon)
// not preferable*** ; not readable
*/

// const balance = 1000
// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test"), console.log("test2");

// ------------------ nesting -------------------

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");
// }

//------------------ multiple condition -----------------------------//

// ===========  1) && statement: true =============

// const userLoggedIn = true
// const debitCard = true
// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");                 //output: Allow to buy course
// }

// ===========  2) && (and statement): true =============

// const userLoggedIn = true
// const debitCard = true
// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allow to buy course");                    //output: Allow to buy course
// }

// ===========  2) && (and statement): false =============

// const userLoggedIn = true
// const debitCard = true
// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");                    // will not go into that code
// }

// ===========  3) || (or statement): true ==========

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
