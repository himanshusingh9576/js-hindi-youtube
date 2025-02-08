const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));
//console.log(balance.toString());


// const otherNumber = 23.63344
// console.log(otherNumber.toPrecision(2));
// const anotherNumber = 1234.435
// console.log(anotherNumber.toPrecision(1));
// const anotherNumber2 = 123.5
// console.log(anotherNumber2.toPrecision(3));
// const anotherNumber3 = 12234556.222
// console.log(anotherNumber3.toPrecision(1));
// const anotherNumber4 = 1234567.89
// console.log(anotherNumber4.toPrecision(7));
// const anotherNumber5 = 123.02
// console.log(anotherNumber5.toPrecision(3));
// const anotherNumber6 = 23.55
// console.log(anotherNumber6.toPrecision(2));

const hundreds = 1000000
//console.log(hundreds.toLocaleString());
//console.log(hundreds.toLocaleString('en-IN'));
 

// ++++++++++ MATHS(LIBRARY) ++++++++++++//

//console.log(Math);
//console.log(Math.abs(-4))
//console.log(Math.round(4.3));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.2));//here we use of ceil methodd that find only maximum value possible

//console.log(Math.floor(4.6));//here we use of floor method that find minimum value of decimal number
//console.log(Math.min(3, 4, 5, 6, 7));//min method find min value of given list
//console.log(Math.max(2, 3, 4, 5)); //max method find max value of given list

console.log(Math.random());//math.random value always find between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+ 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
