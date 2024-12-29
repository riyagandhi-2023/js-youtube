const user = {
  username: "Riya",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got detail from db");
    //return;
    //console.log(`Username: ${this.username}`);
    //console.log(this)  
      
  }
};

//console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);  

//----- new is constructor function ----
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

//--- basic way
// const userOne = User("Riya", 12, true)
// const userTwo = User("ChaiAurCode", 34, false)
// console.log(userOne);

//---- best, clean and correct way
const userOne = new User("Riya", 12, true)
const userTwo = new User("ChaiAurCode", 34, false)


//console.log(userOne);
//console.log(userTwo);
//console.log(userOne.greeting())

console.log(userOne.constructor);

