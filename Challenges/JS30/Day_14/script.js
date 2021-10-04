// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age,age2);
age = 105; 
console.log(age,age2);

let name = 'Wes';
let name2 = name;
console.log(name,name2);
name = 'Will';
console.log(name,name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const copyArray = players;
console.log(players);
console.log(copyArray);
// You might think we can just do something like this:

// however what happens when we update that array?
copyArray[3] = 'Cook';
console.log(players,copyArray);
// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
let copyArray1 = players.slice();

// or create a new array and concat the old one in
let copyArray2 = [].concat(players);

// or use the new ES6 Spread
let copyReal = [...players];
let copyArray3 = Array.from(players);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
name: 'Wes Bos',
age: 80
};

// and think we make a copy:
const newPerson = person;

// how do we take a copy instead?
const copyPerson = Object.assign({},person,{extra:'String',age:12});
// We will hopefully soon see the object ...spread
const copyPerson1 = {...person};
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
    name: 'Wes',
    age: 100,
    social:{
        fb:'fb',
        twitter:'tw'
    }
}

//This will copy upto 1st order || then there will be changes if we update the copy
const newWes = Object.assign({},wes);
const wes1 = JSON.parse(JSON.stringify(wes));
