// singleton
// Object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name : "Abhi",
    "full name" : "AC",
    [mySym] : "my key 1",
    age : 22,
    location : "Mumbai",
    email : "abhi@mail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ac@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ac@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


