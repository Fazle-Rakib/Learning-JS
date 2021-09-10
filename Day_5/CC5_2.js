// Case 1
import {countries,webTechs} from './country.js';
console.log(countries,webTechs);

// Case 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let pattern = /,/g;
let text1 = text.replace(pattern,'');
const words = text1.split([' ']);
console.log(words, typeof words);
console.log(words.length);

// Case 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('SUger');
console.log(shoppingCart.indexOf('Honey'));
shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

//Case 4
if(countries.includes('Ethiopia'))
{
    console.log('ETHiOPIA');
}
else
{
    countries.push('Ethiopia');
}

//Case 5
if(webTechs.includes('Sass'))
{
    console.log('Sass is a CSS preprocess');
}
else
{
    webTechs.push('Sass');
    console.log(webTechs);
}
//Case 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

// Level 3 Case 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(ages);
console.log(ages[0],ages[ages.length-1]);

if(ages.length%2 == 0)
{
    console.log(ages[parseInt((ages.length-1)/2)],ages[ages.length/2]);
}
else
{
    console.log(ages[ages.length/2]);
}

let sum = 0;
for(let i =0;i< ages.length;i++) sum+= ages[i];
// console.log(sum/ages.length);
let avg = sum/parseInt(ages.length);
console.log(avg);
let max = ages[ages.length-1], min = ages[0];
console.log(max - min);

console.log(Math.abs(min-avg),Math.abs(max-avg));

console.log(countries.slice(0,10));
console.log(countries);

//Case 2
console.log(countries[parseInt(countries.length/2)]);

//Case 3
if(countries.length%2 == 0)
{
    let div1 = countries.slice(0,parseInt(countries.length/2));
    let div2 = countries.slice(parseInt(countries.length/2),countries.length);
    console.log(div1,div2);
}
else
{
    let div1 = countries.slice(0,parseInt(countries.length/2)+1);
    let div2 = countries.slice(parseInt(countries.length/2)+1,countries.length);
    console.log(div1,div2);
}
