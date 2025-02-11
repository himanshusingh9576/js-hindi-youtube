// ## Data Types

// NOTES:  Primitive

// 7 types

// 7 types of primitive datatype : String, Number, Boolean, Null, Undefined, Symbol, BigInt,

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 272223577893773n


// Reference types of datatype

// Array, Objects, Functions


const heroes = ["shaktiman","naagraj","doga"]
let myobj = {
    name: "Himanshu",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction)

// How Meomory Work In javascript

let myyoutubename = "hiteshchoudherydotcom"

let anothername = myyoutubename
anothername = "chaiaurcode"

console.log(myyoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "himanshucsa9893@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

