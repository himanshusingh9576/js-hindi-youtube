const accountId = 124452
let accountEmail = "himanshucsai9894@gmail.com"
var accountPassword = "332" /*var is not use in modern code*/
accountCity = "Noida"
let accountState;
/*only const and let keyword is use in modern code */
// accountId = 2 // not allowed

accountEmail = "Singh@.com"
accountPassword = "223211"
accountCity = "Delhi"

console.log(accountId,accountEmail,accountPassword,accountCity,accountState);
/* prefer not to use var beacause of issue in block
scope and functional scope*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

