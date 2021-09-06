// String Manipulation 
//search method
let string  = "Here is a line, which is editable";
console.log(string.search(/di/g));
console.log(string.search('is'));

//match method
console.log(string.match('is'));
// ['is', index: 5, input: 'Here is a line, which is editable', groups: undefined]
console.log(string.match(/is/gi));
//search in the whole string

//Changing Data type and casting
// String To Int (convert string number to a integer)
let numInt = "10", numFloat = "19.98";
console.log(parseInt(numInt), Number(numInt),+numInt);
console.log(parseFloat(numFloat), Number(numFloat), +numFloat);
console.log(parseInt(numFloat));