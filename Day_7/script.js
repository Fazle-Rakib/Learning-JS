//Function declaration
function sum(){
    // console.log(arguments);
    let sum= 0;
    for(each of arguments)
    {
        sum+=parseInt(each);
    }
    console.log(sum);
}
// sum(1,2,3,4,5);
sum(110,120,140,160);

//Arrow function
const sumAll = (...args)=>{
    let sum = 0;
    for(each of args)
    {
        sum+=parseInt(each);
    }
    // console.log(sum);
    return sum;
}

const str = arr =>{
    for(each of arr)
        console.log('Printing name in : '+each);
}

//One line code arrow fuc with expressive return
const squareNum = n => n*n;
const printFullName = (fn,ln) => `${fn} ${ln}`;

console.log(sumAll(1,27,4,4));
console.log(sumAll(1,27,4,45,6));
str(new Array('Rakesh','Kirn','Chad'));
console.log(squareNum(4));
console.log(printFullName('ELon','Musk'));


// ANonymous Funtion
const anonymousFun = function(){
    // console.log('From an anonymous function');
    return 'hello from anonymous';
}

console.log(anonymousFun());

//Expression Function
const square = function(n){
    return n**2;
}

console.log(square(9));

// Self Invoking function 
const selfSqr = (function(n){
    // console.log(parseInt(n)**2);
    return n**2;
})(10);
console.log(selfSqr);

(function(name){
    console.log(`${name} is your name`)
})('Jago');

//FUnction with default params
function greetings(name = 'Dear'){
    console.log(`Hello, ${name}!`);
}

greetings();
greetings('Peter');
