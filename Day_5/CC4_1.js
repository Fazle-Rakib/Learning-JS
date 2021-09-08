// Case 1
let age;
// age = prompt("Age : ");
if(age >= 18)
{
    console.log('Drive');
}
else
{
    console.log(18 - parseInt(age) + ' years remaining');
}

// Case 2
// let a = 'you', b = 'me';
// age = prompt("Age : ");
age = parseInt(age);
if(age > 23)
{
    console.log('You are older than me of ' + (age - 23) + 'years');
}
else
{
    console.log('I am older than you of ' + Math.abs((age) -23) + 'years');

}
// Case 3
let a = 3,b=4;
if(a>b)
{
    console.log("a is greater than b");
}
else
{
    console.log("b is greater than a");

}

a>b ? console.log("a is greater than b") :console.log("b is greater than a") ;

// Case 4
let num = prompt('Enter the number : ');
if(!(num%2))
{
    console.log('Even');
}
else
{
    console.log('Odd');
}

