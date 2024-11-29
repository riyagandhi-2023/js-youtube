// Immediately Invoked Function Expressions (IIFE)

/*
// Why we use Immediately Invoked Function Expressions (IIFE)
 => Answer
Sometimes we face problems due to global scope pollution.  
To remove whatever variable or declaration of global scope pollution we use IIFE.  */

/* BEST WAY TO ANSWER:

"Sometimes we face problems due to global scope pollution, where variables or declarations unintentionally interfere with other parts of the code. 
To address this, we use Immediately Invoked Function Expressions (IIFEs), which create their own scope and execute immediately. 
This prevents variables and functions defined inside the IIFE from polluting the global scope, ensures encapsulation, and avoids name collisions."

*/

// ------ // ({function})(execution);// ----//
// need to END with ; (semi-colon)

// named IIFE
(function chai() {
  // console.log(`DB CONNECTED`);
})();

(function aurcode() {
  // console.log(`DB CONNECTED THREE`);
})();

// Un-named or simple IIFE
(() => {
  //Un-named IIFE
  //console.log(`DB CONNECTED TWO`);
})();

// how to pass parameter in IIFE
((name) => {
  //console.log(`DB CONNECTED THREE ${name}`);
})("riya");

// how to write two IIFE together?

(function () {
  console.log("IIFE 1 is executed!");
})();

(function () {
  console.log("IIFE 2 is executed!");
})();
