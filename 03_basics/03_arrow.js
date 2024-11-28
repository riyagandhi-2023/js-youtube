// you cannot use this in arrow function
// this is refer to current context

const user = {
    username: "riya",
    price: 999,
    
    welcomeMessage: function(){
        //console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }

}

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
*/

/*
function chai(){
    // console.log(this);                   // this context (this) only work in object

    let username = "riya"
    console.log(this.username);             //output: undefined;  this context (this.username) cannot work in a function;
    
}

chai()

*/


/*
const chai = function (){
    let username = "riya"
    //console.log(this.username);                 output: undefined
    
}

chai()
*/


// ===================== Arrow function =================
