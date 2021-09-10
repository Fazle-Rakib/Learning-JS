//Conditionals
let num  = 3;
if(num > 0)
{
    console.log(`${num} is greater than zero`);
}

let weather = 'cloudy';

switch(weather){
    case 'rainy':
        console.log('Rain coat');
        break;
    case 'sunny':
        console.log('Umbrella');
        break;
    case 'cloudy':
        console.log('May rain');
        break;
    default:
        console.log('Good day!');

}

//Array
//Creating array
const arr1 = Array();
const arr2 = new Array(
    'Kamal',
    'Qadir',
    25,
    true,
    {country : 'Bangladesh', city :'Dhaka'},
    {skills : ['Management','R&D','Strategy']}
);
const arr3 = ['HTML', 'CSS', 'JS' , 'React', 'Redux', 'Node', 'Angular'];
console.log(arr1,typeof(arr1),arr2,typeof(arr2),arr3,typeof(arr3), 'Length : ' + arr3.length);

//Using split
const string = 'I love Javascript';
const arr4 = string.split(" ");
console.log(arr4, arr4[2]);

arr4[2] = 'python';
console.log(arr4, arr4[2]);

//Array Methods
//Create array with empty values
const arr5 = new Array(7);
console.log(arr5, arr5.length);

// Fill arrary with static value
const arr6 = new Array(7).fill(0);
console.log(arr6);

const arr7 = [1,2,3,4];
const arr8 = arr6.concat(arr7);
console.log(arr8);

//Index of an element
console.log('Index : '+arr8.indexOf(3));
console.log('Last index of similar element : ' + arr8.lastIndexOf(0));
let search = 4;
console.log(`Does ${search} exits :`+ arr8.includes(search));

//Check data type is an array or not
let isIt = arr2;
console.log(`${isIt} is it an array? : ` + Array.isArray(isIt));

//Convert array to string
console.log(arr7, arr7.toString() , typeof arr7.toString(), typeof arr7);

//Joining array elements
const numbers = [1,2,3,4,5];
console.log(numbers.join(), typeof(numbers.join()));

//slicing
console.log(numbers.slice(),typeof(numbers.slice()));
console.log(numbers.slice(0),typeof(numbers.slice()));
console.log(numbers.slice(1,4),typeof(numbers.slice()));

//splice --> remove and add (str,num of ele to be removed,to be added ele);
console.log(numbers,numbers.splice(),typeof(numbers.splice()));
console.log(numbers,numbers.splice(0,4),typeof(numbers.splice())); // remove the rest
console.log(numbers,numbers.splice(0,3,3,3,7,8,9));

//Push & pop & shift
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift(); // remove from begining
console.log(numbers);
numbers.unshift(1); // add in the begining
console.log(numbers);
console.log(numbers.reverse());
console.log(numbers);
numbers.sort();
console.log(numbers);


//Array of array
const frontEnd = ['HTML', 'CSS', 'JS' ,"Angular", 'Vue'];
const backEnd = ['Node', 'laravel', 'MongoDB'];
const fullStack = [frontEnd,backEnd];
console.log(fullStack,'Length : ' +fullStack.length,fullStack[0],fullStack[0][0]);