  // singleton 

// object literal


// const mySym = Symbol("key1")
// console.log(mySym)


// const JsUser = {    // here we declare object with name JsUser
//     name: "Himanshu",
//     [mySym]: "mykey1",
//     "full name": "Himanshu Singh",
//      // interview question //symbol refer by square bracket
//     age: 18,
//     location: "delhi",
//     email: "himanshucsai9893@gmail.com",
//     isLoggedIn: false,
//     lastLoggedIn: ["Monday", "saturday"],
    
// }
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])
// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["age"])
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


// JsUser.location = "Noida"
// Object.create(JsUser)
// JsUser.location = "Gurugram"
// JsUser.location = "GTB"
// Object.freeze(JsUser) //that method can not change the value
// JsUser.location = "New Delhi"
// console.log(JsUser)
// //console.log(mySym)


// // now function add
 
// JsUser.greeting = function(){
//     console.log("Hello Js User");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello Js User, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greeting);
// console.log(JsUser.greetingTwo());

//SECOND PART OF OBJECTS
// const tinderUser = new Object() // this is singelton object
const tinderUser = {}  // this is not singelton object
  tinderUser.id = "131dsb"
  tinderUser.name = "sammy"
  tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "hiamsnhuka94@gmail.com",
  fullname: {
    userfullname: {
      firstname: "himanshu",
      lastname: "singh"
    }
  }
}
// console.log(regularUser);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
              //or  
// const obj3 = Object.assign({}, obj1, obj2)
              // or
const obj3 = {...obj1, ...obj2} // spread opertor
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
]

// console.log(users[0].id);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
console.log(tinderUser.hasOwnProperty( ))


// object de-structure
const course = {
  coursename: "js hindi",
  price: "999",
  courseInstructor: "himanshu"
}
const {courseInstructor} = course

console.log(courseInstructor);