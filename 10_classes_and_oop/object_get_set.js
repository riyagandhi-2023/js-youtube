const User = {
    _email: "chai@gmail.com",
    _password: "123abc",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }

}

const tea = Object.create(User)
console.log(tea.email);





