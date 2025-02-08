const name = "himanshu"
const repoCount = 50

//console.log(name + repoCount + " value");
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('himan-hc-com')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)
//console.group(newString);

const anotherString = gameName.slice(-6,4)
//console.log(anotherString);

const newStringOne = "    himanshu  "
//console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://himanshu.com/himanshu%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('Singh'))

console.log(gameName.split('-'));