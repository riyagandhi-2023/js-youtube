// Singleton
// Constructor Method

// const tinderUser = new Object()      //singleton object; value: empty; output: {}
const tinderUser = {}                   //non-singleton object; value: empty; output: {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "riya",
            lastname: "gandhi"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);               //open nesting with .(dot)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}          // issue is object inside object. output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2)                   // All values are going in first object (in this case obj1): output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }; 
// const obj3 = Object.assign({}, obj1, obj2, obj4)            // All values are going in {} empty object: best way to prctice: results are same  


const obj3 = {...obj1, ...obj2}                     // spread object: 90% gonna use it. output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]

users[1].email
//console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));                   //output datatype: Array
// console.log(Object.values(tinderUser));                 //output datatype: Array
// console.log(Object.entries(tinderUser));                 //output datatype: Array in array


// console.log(tinderUser.hasOwnProperty('isLogged'));              //to search if the property is available or not. output: false


// object destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);                // needs to do multuiple time if we want to exactract all value

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course           // can change the name: called value destructuring
console.log(instructor);


// destructuring in react

// const navbar = (props.company) => { }        (props.company) === ({company})
// const navbar = ({company}) => { }       
// navbar(company = "riya")

// jason looks like object. Object has its name but jason doesn't has its name
// below structure treat like jason its keys and values both are string

// {
//     "name": "hitesh"
//     "coursename": "js in hindi"
//     "price": "free"
// }


// Api is not necessary you will get in object format only
// Api can also be in array format

// array inside objects 
[
    {},
    {},
    {}
]


