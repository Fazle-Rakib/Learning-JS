//Increment
let count = 0;
console.log(count+=2);
console.log(count++);

//Ternary operator
let isRaining = true;

isRaining ? console.log('Rain coat') : console.log('!Rain coat');

isRaining = false;
isRaining ? console.log('Rain coat') : console.log('!Rain coat');

function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the exponentiation operator (**)
console.log(echo("left", 2) ** echo("middle", 3) ** echo("right", 2));

function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the parentheses around the left and middle exponentiation
console.log((echo("left", 2) ** echo("middle", 3)) ** echo("right", 2));

/** Window Method **/
// alert('ALERT FROM WINDOW ALERT() METHOD...');

// let value = prompt('Enter a number');
// console.log(value);

// const agree = confirm('Are you sure to continue?');
// console.log(agree);

/** Date OBJECT **/
const now = new Date();
console.log(now);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getTimezoneOffset());

//Getting time[Unix time --> this seconds]
const allSeconds = Date.now();
let seconds = new Date().getTime();
console.log(allSeconds,seconds,allSeconds == seconds);
