// let myName = "Riya     "
// // let mychannel = "chai     "

// //console.log(myName.trim().length);
// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.riya = function(){
    console.log(`riya is present in all objects`);
    
}

Array.prototype.heyRiya = function(){
    console.log(`Riya says hello`);
    
}

//heroPower.riya()
// myHeros.riya()
// myHeros.heyRiya()
// heroPower.heyRiya()


// inheritance

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"riya".trueLength()
"iceTea".trueLength()
