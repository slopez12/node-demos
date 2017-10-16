'use strict';

// var user;
const user;

user = { name: "Sara", age: 22 };

if(true) {
  var dog = "Mr.wag"; // dog os scoped to block
}

const colors = ['red', 'green', 'blue']; // colors is constant

// j is scoped to block
for (var j = 0; j < colors.length; j++) {
  console.log(colors[j]);
}

// secret is scopped to the function; var world exhibit same behavior:
function secretKeeper() {
  var secret = "Tell nobody!";
}

// topsecret is not secret at all; without const, let, or var, 'topsecret' appears in the global scope:
function theGossiper() {
  topsecret = "I promoise not to tell nobody";
}

const teacher = "Karl";
const course = "COM 333/533: API";

console.log(teacher + " is the instructor for " + course);

const sayTwelve = () => { return 12; }

// ^ that's the short form for this:
//const sayTwelve = function () {
//  return 12;
//}
