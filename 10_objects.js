// singleton 

// object literal


const mySym = Symbol("key1")


const JsUser = {    // here we declare object with name JsUser
    name: "Himanshu",
    [mySym]: "mykey1",
    "full name": "Himanshu Singh",
     // interview question //symbol refer by square bracket
    age: 18,
    location: "delhi",
    email: "himanshucsai9893@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "saturday"],
    
}
// console.log(JsUser.email)
// // Here we print in both form like uses of dot and uses of bracket in string form
// console.log(JsUser["email"])
// console.log(JsUser.name)
// console.log(JsUser.age)
// console.log(JsUser.location)
// console.log(JsUser.isLoggedIn)
// console.log(JsUser.lastLoggedIn)

// here we print  in both form uses of dot and also uses of square bracket in string 
// console.log(JsUser["lastLoggedIn"])
// console.log(JsUser["isLoggedIn"])
// console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.location = "Noida"
Object.create(JsUser)
JsUser.location = "Gurugram"
JsUser.location = "GTB"
// Object.freeze(JsUser)
// JsUser.location = "New Delhi"
console.log(JsUser)
//console.log(mySym)


// now function add
 
JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());