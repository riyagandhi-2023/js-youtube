class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}


const riya = new User("riya")
//console.log(riya.createId())      // will give you error cannot use because of static

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe());
// console.log(iphone.createId());   // will give you error cannot use because of static
