/* 
=> In object {} curly braces is called object declaration
=> function or if..else {} curly braces called scope of that program or scope of that function or if..else's scope
=> Code between {} curly braces are called scope 
=> block scope is a way to define variables that are only accessible within a specific code block. 
=> here whatever in between if statement after curly braces
=> outside of that block is called global scope 
=> global scope value is available for block scope but whatever value is inside of block scope should not be avaiable for global scope
    
*/

//var c = 300               // gives bug and not recommanded to use
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // var c = 30           // gives bug and not recommanded to use
  // c = 30               // gives bug and not recommanded to use

  //console.log("INNER: ",a);
}

//console.log(a);           // a is not define
//console.log(b);           // b is not define
// console.log(c);             // output: 30

/* 
When you look into google broweser (in console tab) its a core scope (not a global scope)
in compare to you check your global scope using example code in code environment trough node
*/

// =================== nested scope =========================

function one() {
  const username = "riya";

  function two() {
    const website = "youtube";
    //console.log(username);
  }
  // console.log(website);                       // Error: cannot access because out of block scope of function two.

  two();
}

one();

/* 
=> line by line execute so if gets error it will stop executing 
=> needs to excute each and every function
*/

if (true) {
  const username = "riya";
  if (username === "riya") {
    const website = " youtube";
    //console.log(username + website);
  }

  //console.log(website);                           // Error: cannot access because out of block scope.
}

//console.log(username);                                // Error: cannot access because out of block scope.

// ++++++++++++++++++ interesting ++++++++++++++++++

// ------------ (basic) function type 1 ----------------

// console.log(addOne(5))                   //won't give you any error. output: 6
function addOne(num) {
  return num + 1;
}

// addOne(5)

// ------------- function type 2 -----------------------
// =>  function but also called expression: define function in expression, often by assigning it to a variable

// addTwo(5)                            // will give you an error (because not only declared but also holded in a variable)
const addTwo = function (num) {
  return num + 2;
};

// addTwo(5)
