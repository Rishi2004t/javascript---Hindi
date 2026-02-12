//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

*/
//+++++++++++++++++++++++++++++++++++******************___________*********+++++++++++++++++

//Stack (primitive) and Heap (non -primitive)

let myInstaName = "vijaysuryawanshi28"

let anotherName = "HiteshZuy"


console.log(anotherName);
console.log(myInstaName);
console.log(anotherName + myInstaName);

let user = {
    email : "user@google.com",
    upi : "@itjd34"
}
let userTwo = user
userTwo.email = "rishidange420@gmail.com"

console.log(user.email);
console.log(userTwo.email);