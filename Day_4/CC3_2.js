// Case 1
// let base = prompt('Enter the base : ');
// let h = prompt('Enter the height : ');
// console.log('Area : ' + base*h*.5);

// Case 2
// let a = prompt('Enter the a : ');
// let b = prompt('Enter the b : ');
// let c = prompt('Enter the c : ');
// console.log('Perimeter : ' +(parseInt(a)+parseInt(b)+parseInt(c))*1);

// Case 3
// let l = prompt('Enter the len : ');
// let w = prompt('Enter the wid : ');
// console.log(l*w,2*(parseInt(l)+parseInt(w)));

// Case 4
// let rad = prompt('Enter the radius : ');
// const PI = 3.14;
// console.log(2*PI*rad);

// Case 5
console.log(2,-2,-2);

// Case 6
const m = (10-2)/(6-2);
console.log(m);

// Case 7
console.log(m > 2);

// Case 8
const y1 = 2**2 + 6*2+ 9;
const y2 = 3;
console.log(y1,y2);

// Case 9
// let h = prompt('Enter the hour : ');
// let rate = prompt('Enter the rate : ');
// console.log(h*rate);

// Case 10
'Rakib'.length > 7 ? console.log('Long') : console.log('Short'); 

// Case 11
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
firstName.length > lastName.length ?  console.log('Long') : console.log('Short'); 

// Case 12
let myAge = 250;
let yourAge = 25;
myAge > yourAge ? console.log('older ' + parseInt(myAge-yourAge)) : console.log('younger ' + yourAge-myAge ); 

// Case 13
// let year = prompt('Birthyear: ');
// 2021 - parseInt(year) > 18 ? console.log('Drive') : console.log('!Drive'); 
 
// Case 14
// let live = prompt('Age : ');
// console.log(parseInt(live)*365*24*3600);

// Case 15
let date = new Date();
console.log(date.getFullYear()+ '-' +date.getMonth() + '-' + date.getDate(), date.getHours()+ ':' +date.getMinutes());