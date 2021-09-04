//Single line Comment

/*
Multi 
Line 
comment
*/

console.log("Hello, There!")

//[2.5] Values and variables
console.log(40+8+23-10);

let firstName = "Jones"; //Var in camelcase notations
let first = "Nick"; 
//An syntaxError in var name
// let 10Days;
// let jonas&matela;
// let new; Reserved Keyworks
let $first;
let PI = 3.1415; // Convention : Constants var_name should be in all capital 
console.log("Name : " + firstName);

/*** [2.7] Data Types ***/
let num = 23;
let secondName = "Jone";
let isBool = true;
let notDefined;
console.log(typeof(isBool));
isBool = 23; // JS has dynamic typing, value has data type not variable
console.log(typeof(isBool));
console.log(typeof notDefined);
console.log(typeof null); 


/**  [2.8] Differnt ways to delare variable **/
let age = 23;
age = 24;

const Pi = 3.1415;
// Pi = 3.1416; // this will cause error(Assignment to const)
// const gravity; // const willout initialization

// var was previously used in ES5
var job = 'teacher';
job = 'instructor';

//Globally scoped variable declaration
lastName = "Hera";


/** [2.9] Basic Operation **/
const powerOfTwo = 2**3;

/* [2.10] Operator procedence*/
console.log(2021 - 1998 > 2021- 1996);