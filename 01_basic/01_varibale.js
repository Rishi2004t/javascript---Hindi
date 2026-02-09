const accountId = 1353524
let accountEmail = "mamaji@google.com"
var  accountPassword = "12934"
accountCity = "jaipur"

//accountId  = 2  const mein humne jab value dal di to fir hum use change nahi kar sakte hai
accountEmail = "ma@ma.com"
accountPassword = "31214131"
accountCity = "Bengaluru"
/* prefer not to use for var
because of issue in block scope and functional scope

*/
let accountState
console.log(accountId)
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])