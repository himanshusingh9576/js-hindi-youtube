// array

const myArr = [2, 3, 4, 5, 6, 7]
const myHeroes = ["kohli", "rohit"]

const myArray2 = [1, "him", 2]
//console.log(myArr[2]);
//console.log(myHeroes[0]);
///console.log(myArray2[1]);


// Array Methods

//myArr.push(8) //this method(push) intiate an element in last of array
//myArr.push(9)
//myArr.pop() //this method(pop) remove the last element of an array.
//console.log(myArr);
  
//myArr.unshift(9) // unshift method is used for insert an element in starting of array
//myArr.shift() // this method remove the first element of an array
//console.log(myArr.includes(9));//here includes method want to say that's given element are available in array or not
//console.log(myArr.indexOf(3));// here index method tell that on which position or index of the given element are present

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr)
// console.log(myArr);

// slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // int his slice method the given range print in actual array
// in slice method last range of digit can not print
//console.log(myn1);
//console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // in this method the given range does not print in actual array
// in splice method last range of digit does print
//console.log("B ", myArr);
//console.log(myn2)



////////////// SECOND PART OF ARRAY///////////////


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// marvel_heros.pop()
marvel_heros.some()
console.log(marvel_heros)
// console.log(marvel_heros[2][2]);

const allHeros = marvel_heros.concat(dc_heros) // here we use concate operator for merging two array
//both work same for merging of two arrays
const all_new_heros = [...marvel_heros, ...dc_heros] // here we use spread operator for merging two array
// console.log(allHeros);
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // infinity give all the value of arrays
// console.log(real_another_array); 


console.log(Array.isArray("Himanshu"))
console.log(Array.from("Himanshu"))
// console.log(Array.isArray(122122232))
//console.log(Array.from(313441)) // it can not convert in array because it is const value

// console.log(Array.from({name: "himanshu"}))  // interesting method   it give blank value because it can not specified how to make array like keys or value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));